import React from 'react'

import { requestUserUploadsPlaylistId } from '../functions/youtobe/list'
import { createPlaylist } from '../functions/youtobe/create-playlist'
import { addToPlaylist } from '../functions/youtobe/add-to-playlist'
import { search } from '../functions/youtobe/search'



export default class YPlayList extends React.Component {
  test() {
    requestUserUploadsPlaylistId()
  }

  createPlaylist() {
    createPlaylist()
  }

  addToPlaylist() {
    addToPlaylist('hAvVt7zz1rM', 'PL0_usZwiHYBXeCSA6QI40f12UaPxurh6g')
  }

  search() {
    search();
  }

  render() {
    return (
      <div>
        <button type="" onClick={this.test}>Playlist</button><br />
        <button type="" onClick={this.createPlaylist}>Create Playlist</button><br />
        <button type="" onClick={this.addToPlaylist}>Add To Playlist</button><br />
        <button type="" onClick={this.search}>Search</button><br />

        <ul>
          <li>1</li>
        </ul>
      </div>
    )
  }
}