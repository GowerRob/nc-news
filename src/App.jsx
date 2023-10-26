import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage'
import TopicList from './components/TopicList';
import TopicArticlePage from './components/TopicArticlePage';
import NoTopic from './components/NoTopic';
import NoPath from './components/NoPath';
import NoArticle from './components/NoArticle';

function App() {

  return (
    <>
      <NavBar />
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
        <Route path="/topics" element={<TopicList />}></Route>
        <Route path="/articles/topics/:topic" element={<TopicArticlePage />}></Route>
        <Route path="/noarticle" element={<NoArticle />}></Route> 
        <Route path="/notopic" element={<NoTopic />}></Route> 
        <Route path="/*" element={<NoPath />}></Route> 
      </Routes>
      
    </>
  )
}

export default App
