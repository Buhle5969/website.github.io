import React from 'react';
import Banner from './components/banner';
import About from './components/about';
import Items from './components/items';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner/>
      <About/>
      <Items/>
      <Footer/>
    </div>
  );
}

export default App;
