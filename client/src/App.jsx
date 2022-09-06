import React from 'react'
import './index.css'
import Player from './components/player/Player'
import Home from './components/pages/home/Home'
import Watch from './components/pages/watch/Watch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




const App = () => {
    return (
        <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/watch' element={<Watch />} />
            <Route path="/player/:id" component={<Player />} />
        </Routes>
        </Router>
    )
}

export default App