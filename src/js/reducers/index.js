import { combineReducers } from 'redux'

import authVK from './auth-vk'
import playlistVK from './playlist-vk'

export default combineReducers({
  authVK: authVK,
  playlistVK: playlistVK
})