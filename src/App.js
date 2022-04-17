
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const pageSize=15;
  const apiKey=process.env.REACT_APP_NEWS_API
    return (
      
      <div>
        <Router>
        <Navbar/>
        
        <Routes>
        <Route exact path="/" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in"  category="general"/>}/>
      <Route exact path="/business" element={<News  pageSize={pageSize} apiKey={apiKey} country="in"   key="business"category="business"/>} />
      <Route exact path="/entertainment" element={<News  pageSize={pageSize} apiKey={apiKey} country="in" key="entertainment"category="entertainment" />}/>
      <Route exact path="/general" element={<News  pageSize={pageSize} apiKey={apiKey} country="in" key="general" category="general" />}/>
      <Route exact path="/health" element={<News  pageSize={pageSize} apiKey={apiKey} country="in"  key="health" category="health" />}/>
      <Route exact path="/science" element={<News  pageSize={pageSize} apiKey={apiKey} country="in"  key="science" category="science"/>} />
      <Route exact path="/sports" element={<News  pageSize={pageSize} apiKey={apiKey} country="in"  key="sports" category="sports" />}/>
      <Route exact path="/technology" element={<News  pageSize={pageSize} apiKey={apiKey} country="in"  key="technology" category="technology"/>}/>
    </Routes>
        </Router>
      </div>
      
    )
  }

export default App;