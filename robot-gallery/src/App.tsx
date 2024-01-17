import React from 'react';
import logo from './logo.svg';
import './App.css';
import Robot from "./components/Robot"
import robots from "./mockdata/robots.json"

function App() {
  return (
    <ul>
      {robots.map(robots => <Robot id={robots.id} name={robots.name} email={robots.email} />)}
    </ul>
  );
}

export default App;
