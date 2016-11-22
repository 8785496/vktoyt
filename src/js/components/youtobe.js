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
      playlist: store.playlistVK
    }
  },
  (dispatch) => {
    return {
      search: bindActionCreators(search, dispatch)
    }
  }
)
export default class YPlayList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  test() {
    requestUserUploadsPlaylistId()
  }

  createPlaylist() {
    createPlaylist()
  }

  addToPlaylist() {
    addToPlaylist('hAvVt7zz1rM', 'PL0_usZwiHYBXhm1iJ_1AYNUiRJOkq5fnc')
  }

  search() {
    this.props.search(this.state.value);
    // this.props.search(this.props.playlist[1]);
  }

  render() {
    return (
      <div>
        <h4>Youtobe</h4>
        <pre>
          {JSON.stringify(this.props.playlist[1], null, 2)}
        </pre>
        <button type="" onClick={this.test}>Playlist</button><br />
        <button type="" onClick={this.createPlaylist}>Create Playlist</button><br />
        <button type="" onClick={this.addToPlaylist}>Add To Playlist</button><br />
        <input type="text"  onChange={this.handleChange} />
        <button type="" onClick={this.search}>Search</button><br />

        <ul>
          <li>1</li>
        </ul>
      </div>
    )
  }
}