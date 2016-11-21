import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from '../functions/vk/login'
import { getAudio } from '../functions/vk/get-audio'

@connect(
  (store) => {
    return {
      auth: store.authVK
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
  }
  
  login() {
    //login()
    //console.log(this)
    this.props.login()
  } 

  getAudio() {
    getAudio()
  }

  render() {
    return (
      <div>
        VKPlayList!!!<br />
        <button onClick={this.login}>Логин</button><br />
        <button onClick={this.getAudio}>Плейлист</button>
      </div>
    )
  }
}