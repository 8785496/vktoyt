import { combineReducers } from 'redux'

import authVK from './vk/auth-vk'
import playlistVK from './vk/playlist-vk'
import authYT from './youtobe/auth-yt'
import playlistYT from './youtobe/youtobe'
import searchList from './youtobe/search-list'

export default combineReducers({
  authVK: authVK,
  authYT: authYT,
  playlistVK: playlistVK,
  playlistYT: playlistYT,
  searchList: searchList
})