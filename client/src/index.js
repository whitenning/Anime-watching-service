import ReactDOM, { render } from 'react-dom'
import React, { Component } from 'react'
import App from './App'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'


const root = ReactDOM.render(<App/>, document.querySelector('#root'))
root.render(
        <App />
)
