import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/index'
import './static/styles/index.css'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@chakra-ui/core'
import { customTheme } from './theme'
import store from './store/store'
import axios from 'axios'

axios.defaults.baseURL =
  'https://europe-west2-moneytrackerapp-0000.cloudfunctions.net/api'
// axios.defaults.baseURL =
//   "http://localhost:5000/moneytrackerapp-0000/europe-west2/api";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
