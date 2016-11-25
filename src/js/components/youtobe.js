import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createPlaylist } from '../actions/youtobe/create-playlist'
import { addToPlaylist } from '../actions/youtobe/add-to-playlist'
import { search } from '../actions/youtobe/search'
import { load } from '../actions/youtobe'


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
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
    this.createPlaylist = this.createPlaylist.bind(this)
    this.addToPlaylist = this.addToPlaylist.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  createPlaylist() {
    this.props.createPlaylist();
  }

  addToPlaylist() {
    // const playlistId = "PL0_usZwiHYBXVqO8tJYu97AJjzVJR7NK6"
    const playlistId = this.props.playlistYT.playlist.id
    const length = this.props.searchList.length

    const next = (i) => {
      if (i >= length)
        return;

      const item = this.props.searchList[i]

      if (item.fetched) {
        this.props.addToPlaylist(item.item.id.videoId, playlistId, i, next)
      } else {
        next(++i)
      }
    }

    next(0)
  }

  search() {
    this.props.playlistVK.forEach((item, i) => {
      let query = item.artist + ' ' + item.title
      this.props.search(query, i)
    })
  }

  render() {
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">Youtobe ({this.props.playlistYT.playlist && this.props.playlistYT.playlist.id})</div>
        <div className="panel-body">
          
          {this.state.value}
          
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Playlist name..." onChange={this.handleChange} />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button"  onClick={this.createPlaylist}>Create Playlist</button>
              </span>
          </div>
          <br />
          <button className="btn btn-default" type="" onClick={load}>Login</button>
          {' '}
          <button className="btn btn-default" type="" onClick={this.search}>Search</button>
          {' '}
          <button className="btn btn-default" type="" onClick={this.addToPlaylist}>Add To Playlist</button>
        </div>

        <ul className="list-group">
          {this.props.searchList.map((item, i) => {
            return (
              <li className="list-group-item" key={i}>
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