import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import { load } from './functions/youtobe/start'
import { init } from './functions/vk/init'

// load() // Youtobe
init() // VK


ReactDOM.render(
  <App />,
  document.getElementById("root")
)