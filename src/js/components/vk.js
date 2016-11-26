import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from '../actions/vk'
import { init } from '../actions/vk'
import { status } from '../actions/vk'
import { getAudio } from '../actions/vk'

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
      status: bindActionCreators(status, dispatch),
      getAudio: bindActionCreators(getAudio, dispatch)
    }
  }
)
export default class VKPlayList extends React.Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    init() // VK init
    this.props.status()

    this.getAudio = this.getAudio.bind(this)
  }

  login() {
    this.props.login()
  }

  getAudio() {
    this.props.getAudio(this.props.auth.session.mid)
  }

  render() {
    const pl = this.props.playlist.map((item, index) => {
      return <li className="list-group-item" key={index}>{item.artist}- {item.title}</li>
    })

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          VK {this.props.auth.auth && `(id${this.props.auth.session.mid})`}
        </div>
        {this.props.playlist.length === 0 &&
          <div className="panel-body">
            {!this.props.auth.auth &&
              <button className="btn btn-default" onClick={this.login}>Логин</button>
            }
            {this.props.auth.auth &&
              <button className="btn btn-default" onClick={this.getAudio}>Плейлист</button>
            }
          </div>
        }
        <ul className="list-group">
          {pl}
        </ul>
      </div>
    )
  }
}