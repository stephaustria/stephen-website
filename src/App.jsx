import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Me } from './components/Me.jsx/Me';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {

  return <div className={styles.App}>
    <Navbar />
    <Me />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>;

  
}

export default App;
