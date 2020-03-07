import React from 'react';
import './App.css';
import './utils/images/AxeHandel.ttf'
import './utils/design/Global.css'
import { Home } from './view/Home'
import SocialMedia from './components/socialmedia/SocialMedia'

export default function App() {
  return (
    <div className="App">
      <Home />
      <SocialMedia />
    </div>
  );
}