
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import  AboutMe  from "./components/AboutMe";
import ReactGa from 'react-ga'
import { useEffect } from 'react';


function App() {

  useEffect(()=>{
    ReactGa.initialize('UA-246843714-1')
    //to report pageview
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <p>This website is also created by me using ReactJS and Bootstrap. Nice to have you here. Enjoy your surfing...</p>
      <Footer />
    </div>
  );
}

export default App;
