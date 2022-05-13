import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './scss/index.scss'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import Layout from './components/Layout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Router>
  <Routes>
    <Route path="/" element={ <Layout /> }>
      <Route path="blog" element={ <BlogPage /> } />
      <Route path="" element={ <HomePage /> } />
    </Route>
  </Routes>
</Router>
)
