import React from 'react';
import './App.css';
import './utils/images/AxeHandel.ttf'
import './utils/design/Global.css'
import { Home } from './view/home/Home'
import { Contact } from './view/contact/Contact'
import SocialMedia from './components/socialmedia/SocialMedia'

export default function App() {
  return (
    <div className="App">
      <Home />
      <Contact />
      <SocialMedia />
    </div>
  );
}