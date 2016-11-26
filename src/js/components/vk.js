import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from '../actions/vk'
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
      login: bindActionCreators(login, dispatch)
    }
  }
)
export default class VKPlayList extends React.Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    init() // VK init
  }

  login() {
    this.props.login()
  }

  render() {
    const pl = this.props.playlist.map((item, index) => {
      return <li className="list-group-item" key={index}>{item.artist} - {item.title}</li>
    })

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          VK {this.props.auth.auth && ('(' + this.props.auth.session.user.first_name + ' ' + this.props.auth.session.user.last_name + ')')}
        </div>
        {!this.props.auth.auth &&
          <div className="panel-body">
            <button className="btn btn-default" onClick={this.login}>Плейлист</button>
          </div>
        }
        {this.props.auth.auth &&
          <ul className="list-group">
            {pl}
          </ul>
        }
      </div>
    )
  }
}