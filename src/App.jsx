import './App.css'

import React, { Component } from 'react'
import Navbar from './components/navbar'
import News from './components/News'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<News key="general" pageSize={20} country="us" category="general" />} />
                <Route exact path="/Business" element={<News key="business" pageSize={20} country="us" category="business" />} />
                <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={20} country="us" category="entertainment" />} />
                <Route exact path="/General" element={<News key="general" pageSize={20} country="us" category="general" />} />
                <Route exact path="/Health" element={<News key="health" pageSize={20} country="us" category="health" />} />
                <Route exact path="/Science" element={<News key="science" pageSize={20} country="us" category="science" />} />
                <Route exact path="/Sports" element={<News key="sports" pageSize={20} country="us" category="sports" />} />
                <Route exact path="/Technology" element={<News key="technology" pageSize={20} country="us" category="technology" />} />
            </Routes>
        </Router>
      </div>
    )
  }
}
