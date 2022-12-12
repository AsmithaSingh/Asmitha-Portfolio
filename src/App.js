import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <AboutMe/>
      <Experience/>
      <Education/>
      <Awards/>
      <Contact/>
    </div>
  );
}

export default App;
