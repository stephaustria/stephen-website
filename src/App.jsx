import styles from './App.module.css';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Me } from './components/Me.jsx/Me';
import { Navbar } from './components/Navbar/Navbar';

function App() {

  return <div className={styles.App}>
    <Navbar />
    <Me />
    <About />
    <Experience />
  </div>;

  
}

export default App;
