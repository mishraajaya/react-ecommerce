import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'

import 'styles/main.scss'

const Root = () => <Routes />

ReactDOM.render(<Root />, document.getElementById('root'))