import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from '../actions/vk'
import { getAudio } from '../actions/vk'
import { init } from '../actions/vk'

@connect(
  (store) => {
    return {
      auth: store.authVK,
      playlist: store.playlistVK
    }
  },
  (dispatch) => {
    return {
      login: bindActionCreators(login, dispatch),
      getAudio: bindActionCreators(getAudio, dispatch)
    }
  }
)
export default class VKPlayList extends React.Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.getAudio = this.getAudio.bind(this)

    init() // VK init
  }

  login() {
    this.props.login()
  }

  getAudio() {
    if (this.props.auth.auth) {
      this.props.getAudio(this.props.auth.userId)
    }
  }

  render() {
    const pl = this.props.playlist.map((item, index) => {
      return <li className="list-group-item" key={index}>{item.artist} - {item.title}</li>
    })

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">VK playlist</div>
        <div className="panel-body">
          <pre>
            {JSON.stringify(this.props.auth, null, 2)}
          </pre>
          <button className="btn btn-default" onClick={this.login}>Логин</button>
          {' '}
          <button className="btn btn-default" onClick={this.getAudio} disabled={!this.props.auth.auth}>Плейлист</button>
        </div>
        {this.props.auth.auth &&
          <ul className="list-group">
            {pl}
          </ul>
        }
      </div>
    )
  }
}