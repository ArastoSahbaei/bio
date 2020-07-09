import React from 'react';
import './App.css';
import './utils/design/Global.css'
import './utils/fonts/FredokaOne-Regular.ttf';
import { Home } from './view/home/Home'
import { About } from './view/about/About'
import { Work } from './view/work/Work'
import { Contact } from './view/contact/Contact'
import SocialMedia from './components/socialmedia/SocialMedia'


export default function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Contact />
      <SocialMedia />
    </div>
  );
}