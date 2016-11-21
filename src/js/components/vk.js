import React from 'react'

import { login } from '../functions/vk/login'
import { getAudio } from '../functions/vk/get-audio'


export default class VKPlayList extends React.Component {
  login() {
    login()
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