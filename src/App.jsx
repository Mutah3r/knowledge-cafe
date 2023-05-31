import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';
// import QuestionBlogs from '../QuestionBlogs/QuestionBlogs';
import './App.css'
import QuestionBlogs from './components/QuestionBlogs/QuestionBlogs';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <QuestionBlogs />
    </div>
  );
};

export default App;