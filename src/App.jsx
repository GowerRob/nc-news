import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage'
import TopicPage from './components/TopicPage';

function App() {

  return (
    <>
      <NavBar />
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route path="/article/:article_id" element={<ArticlePage />}></Route>
        <Route path="/topics" element={<TopicPage />}></Route>
      </Routes>
      
    </>
  )
}

export default App
