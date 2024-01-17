import React from 'react';
import styles from './App.module.css'
import Robot from "./components/Robot"
import robots from "./mockdata/robots.json"

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
      {robots.map(robots => <Robot id={robots.id} name={robots.name} email={robots.email} />)}
      </div>
    </div>
  );
}

export default App;
