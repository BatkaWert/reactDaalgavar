import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Aside />
        <Article />
      </div>
      <Footer />
    </div>
  );
}

export default App;