import React from 'react';
import styles from './App.module.css'
import Robot from "./components/Robot"
import robots from "./mockdata/robots.json"
import logo from "./assests/images/logo.svg"
import ShoppingCart from './components/ShoppingCart';


function App() {

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>robots are so cool!</h1>
        </div>
        <ShoppingCart />
      <div className={styles.robotList}>
      {robots.map(robots => <Robot id={robots.id} name={robots.name} email={robots.email} />)}
      </div>
    </div>
  );
}

export default App;
