import React from 'react';
import styles from './App.module.css'
import Robot from "./components/Robot"
import robots from "./mockdata/robots.json"
import logo from "./assests/images/logo.svg"
import ShoppingCart from './components/ShoppingCart';

interface Props {}

interface State {
  robotGallery: any;
}

class App extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);
      this.state = {
        robotGallery: [],
      };
  
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ robotGallery: data}));
  }


  render(){
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>robots are so cool!</h1>
          </div>
          <ShoppingCart />
        <div className={styles.robotList}>
        {robots.map(robotGallery => <Robot id={robotGallery.id} name={robotGallery.name} email={robotGallery.email} />)}
        </div>
      </div>
    );
  }


}



export default App;
