import { combineReducers } from 'redux'

import authVK from './vk/auth-vk'
import playlistVK from './vk/playlist-vk'
import authYT from './youtube/auth-yt'
import playlistYT from './youtube/youtobe'
import searchList from './youtube/search-list'

export default combineReducers({
  authVK: authVK,
  authYT: authYT,
  playlistVK: playlistVK,
  playlistYT: playlistYT,
  searchList: searchList
})