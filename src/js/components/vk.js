import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from '../functions/vk/login'
import { getAudio } from '../functions/vk/get-audio'

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
  }
  
  login() {
    this.props.login()
  } 

  getAudio() {
    // console.log(this.props)
    this.props.getAudio(this.props.auth.userId)
  }

  render() {
    const pl = this.props.playlist.map(item => {
      return <li>{item.artist} - {item.title}</li>
    })
    
    return (
      <div>
        VKPlayList!!!<br />
        <pre>
          {JSON.stringify(this.props.auth, null, 2)}
        </pre>
        <button onClick={this.login}>Логин</button><br />
        <button onClick={this.getAudio}>Плейлист</button>
        <ul>
          {pl}
        </ul>
      </div>
    )
  }
}