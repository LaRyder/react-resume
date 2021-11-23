import React, {Component} from 'react';
import styles from './App.module.css';
import Background from './Background/Background';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render(){
    return (
      <div className={styles.App}>
        <Header />
        <Background />
        <Skills />
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default App;
