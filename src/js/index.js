import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/app'
import store from './store'
// import { load } from './functions/youtobe/start'
import { load } from './functions/youtobe'
// import { init } from './functions/vk/init'
import { init } from './functions/vk'

load() // Youtobe
init() // VK


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)