import { combineReducers } from 'redux'

import authVK from './vk/auth-vk'
import playlistVK from './vk/playlist-vk'
import playlistYT from './youtobe/youtobe'
import searchList from './youtobe/search-list'

export default combineReducers({
  authVK: authVK,
  playlistVK: playlistVK,
  playlistYT: playlistYT,
  searchList: searchList

})