
import { createRoot } from 'react-dom/client';
import React from 'react';
import "./App.css"
import { TwitterFollowCard } from './components';
import{App}from"./Views/"
const SpecialButton = ({ text }) => {
  return <button>{text}</button>;
};

createRoot(document.getElementById('root')).render(
  
  <App/>
);