import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { requestUserUploadsPlaylistId } from '../functions/youtobe/list'
import { createPlaylist } from '../functions/youtobe/create-playlist'
import { addToPlaylist } from '../functions/youtobe/add-to-playlist'
import { search } from '../functions/youtobe/search'


@connect(
  (store) => {
    return {
      playlistYT: store.playlistYT,
      searchList: store.searchList,
      playlistVK: store.playlistVK
    }
  },
  (dispatch) => {
    return {
      search: bindActionCreators(search, dispatch),
      createPlaylist: bindActionCreators(createPlaylist, dispatch)
    }
  }
)
export default class YPlayList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
    this.createPlaylist = this.createPlaylist.bind(this)
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  test() {
    requestUserUploadsPlaylistId()
  }

  createPlaylist() {
    this.props.createPlaylist();
  }

  addToPlaylist() {
    addToPlaylist('hAvVt7zz1rM', 'PL0_usZwiHYBXhm1iJ_1AYNUiRJOkq5fnc')
  }

  search() {
    // this.props.search(this.state.value);
    let id = +this.state.value;

    this.props.search(this.props.playlistVK[id].artist + ' ' +
     this.props.playlistVK[id].title);
  }

  render() {
    return (
      <div>
        <h4>Youtobe</h4>
        <pre>
          {/*JSON.stringify(this.props.searchList, null, 2)*/}
          {this.state.value}
        </pre>
        <button type="" onClick={this.test}>Playlist</button><br />
        <button type="" onClick={this.createPlaylist}>Create Playlist</button><br />
        <button type="" onClick={this.addToPlaylist}>Add To Playlist</button><br />
        <input type="text"  onChange={this.handleChange} />
        <button type="" onClick={this.search}>Search</button><br />

        <ul>
          {this.props.searchList.map((item, i) => {
            return(
              <li key={i}>
                {!item.fetch && 'empty'}
                {item.fetching && ' - fetching'}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}