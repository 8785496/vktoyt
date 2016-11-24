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
      playlistVK: store.playlistVK,
    }
  },
  (dispatch) => {
    return {
      search: bindActionCreators(search, dispatch),
      createPlaylist: bindActionCreators(createPlaylist, dispatch),
      addToPlaylist: bindActionCreators(addToPlaylist, dispatch)
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
    this.addToPlaylist = this.addToPlaylist.bind(this)
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
    let playlistId = this.props.playlistYT.playlist.id

    this.props.searchList.forEach((item, i) => {
      if (item.fetched) {
        this.props.addToPlaylist(item.item.id.videoId, playlistId, i)
      }
    })
  }

  search() {
    this.props.playlistVK.forEach((item, i) => {
      let query = item.artist + ' ' + item.title
      this.props.search(query, i)
    })
  }

  render() {
    return (
      <div>
        <h4>Youtobe</h4>
        <pre>
          {JSON.stringify(this.props.playlistYT, null, 2)}
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
                {!item.fetched && !item.fetching && !item.error && 'empty'}
                {item.fetching && 'Loading...'}
                {item.fetched && item.item.snippet.title}
                {item.error}
                {item.saved && ' (saved)'}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}