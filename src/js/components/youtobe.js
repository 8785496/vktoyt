import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createPlaylist } from '../actions/youtobe/create-playlist'
import { addToPlaylist } from '../actions/youtobe/add-to-playlist'
import { search } from '../actions/youtobe/search'
import { init } from '../actions/youtobe/auth'
import { login } from '../actions/youtobe/auth'

@connect(
  (store) => {
    return {
      playlistYT: store.playlistYT,
      searchList: store.searchList,
      playlistVK: store.playlistVK,
      auth: store.authYT
    }
  },
  (dispatch) => {
    return {
      search: bindActionCreators(search, dispatch),
      createPlaylist: bindActionCreators(createPlaylist, dispatch),
      addToPlaylist: bindActionCreators(addToPlaylist, dispatch),
      init: bindActionCreators(init, dispatch),
      login: bindActionCreators(login, dispatch)
    }
  }
)
export default class YPlayList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { title: 'Новый плейлист' };
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
    this.createPlaylist = this.createPlaylist.bind(this)
    this.addToPlaylist = this.addToPlaylist.bind(this)
    this.login = this.login.bind(this)

    this.props.init()
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  createPlaylist() {
    this.props.createPlaylist(this.state.title);
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

  login() {
    this.props.login()
  }

  render() {
    const SearchItem = ({item, i}) => {
      if (item.saved)
        return <span style={{ color: 'green' }}><i className="glyphicon glyphicon-ok" aria-hidden="true"></i> {item.item.snippet.title}</span>

      if (item.error)
        return <span style={{ color: 'red' }}><i className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></i> {item.error}</span>
      
      if (item.fetching)
        return <span>Поиск...</span>
      
      if (item.fetched)
        return <span>{item.item.snippet.title}</span>
      
      return <i className="glyphicon glyphicon-question-sign" aria-hidden="true"></i>
    }
    
    const pl = this.props.searchList.map((item, i) => {
      return (
        <li className="list-group-item" key={i}>
          <SearchItem item={item} i={i} />
        </li>
      )
    })

    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          Youtobe {this.props.playlistYT.playlist && ` (Плейлист: ${this.props.playlistYT.playlist.snippet.title})`}
        </div>
        <div className="panel-body">

          {this.state.value}

          {this.props.auth.auth &&
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Название плейлиста..." value={this.state.title} onChange={this.handleChange} />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={this.createPlaylist}>Создать</button>
              </span>
            </div>
          }

          <div>
            {this.props.auth.auth === false &&
              <div>
                <button className="btn btn-default" onClick={this.login}>Вход</button>
                {' '}
              </div>
            }
            {this.props.auth.auth &&
              <div>
                {this.props.searchList.length > 0 &&
                  <div>
                    <button className="btn btn-default" onClick={this.search}>Поиск песен</button>
                    {' '}
                    {this.props.playlistYT.playlist &&
                      <button className="btn btn-primary" onClick={this.addToPlaylist}>Добавить в плейлист</button>
                    }
                  </div>
                }
              </div>
            }
          </div>
        </div>
        <ul className="list-group">
          {pl}
        </ul>
      </div>
    )
  }
}