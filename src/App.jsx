import { Routes, Route } from 'react-router-dom';
import Header2 from './components/header/Header2';
import ArticleList from './components/articles/ArticleList';
import ArticlePage from './components/articlehome/ArticlePage'
import TopicList from './components/TopicList';
import TopicArticlePage from './components/TopicArticlePage';
import LoginPage from './components/LoginPage';
import NoTopic from './components/NoTopic';
import NoPath from './components/NoPath';
import NoArticle from './components/NoArticle';
import Search from './components/search/Search';

import './App.css'

import { NavBar } from './components';



function App() {

  return (
    <div className='App'>
    <div className='gradient__bg'>
      <NavBar />
      {/* <Header /> */}
    </div>

      <Routes>
        <Route path="/" element={<Header2 />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
        <Route path="/topics" element={<TopicList />}></Route>
        <Route path="/articles/topics/:topic" element={<TopicArticlePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/noarticle" element={<NoArticle />}></Route> 
        <Route path="/notopic" element={<NoTopic />}></Route> 
        <Route path="/*" element={<NoPath />}></Route> 
      </Routes>
      

    </div>

    
  )
}

export default App
