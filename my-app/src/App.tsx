import React from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Group from './pages/Group';
import Expenses from './pages/Expenses';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/expenses" element={<Expenses/>}/>
          <Route path="/group" element={<Group/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
