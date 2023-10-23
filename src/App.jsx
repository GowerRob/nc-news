import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import LandingPage from './components/LandingPage';

function App() {

  return (
    <>
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/articles" element={<ArticleList />}></Route>

      </Routes>
      
    </>
  )
}

export default App
