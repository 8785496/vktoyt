import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import { load } from './functions/youtobe/start'
import { test } from './functions/vk/iframe'

// load()
test()


ReactDOM.render(
  <App />,
  document.getElementById("root")
)