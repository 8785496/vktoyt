import React from 'react'

import YPlayList from './youtobe'
import VKPlayList from './vk'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <VKPlayList />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <YPlayList />
          </div>
        </div>
      </div>
    )
  }
}