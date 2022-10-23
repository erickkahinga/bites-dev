import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Login from './components/Login';
import Home from './container/Home';
import {Helmet} from "react-helmet";

const App = () => {
  return (
    <div className="application">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Bites</title>
          <link rel="canonical" href="http://localhost:3000/login" />
          <meta name="description" content="Come Take a Bite with Us" />
      </Helmet>

      <Routes>
        <Route path = "login" element = {<Login />} />
        <Route path = "/*" element = {<Home />} />
      </Routes>
    </div>
  )
}

export default App