import React, {useState, useEffect} from 'react';
import styles from './App.module.css'
import Robot from "./components/Robot"
import logo from "./assests/images/logo.svg"
import ShoppingCart from './components/ShoppingCart';

interface Props {}

interface State {
  robotGallery: any[];
}

const App:React.FC  = () =>{

const [robotGallery, setRobotGallery] = useState<any>([]);
const [isLoading, setisLoading] = useState<boolean>();

useEffect(() => {
  const fetchData = async () =>{
    setisLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setRobotGallery(data);
    setisLoading(false);

  }

  fetchData();
},[])

  
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>robots are so cool!</h1>
          </div>
          <ShoppingCart />
       {!isLoading ? (<div className={styles.robotList}>
        {robotGallery.map((r:any) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div>): <h1>Loading</h1>}
      </div>
    );
  


}



export default App;
