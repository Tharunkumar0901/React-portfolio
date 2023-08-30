// src/App.js
import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import About from './components/About';
import {Route,Routes} from 'react-router-dom'
import Experience from './components/experience';
import ContactForm from './components/contact';
import Project from './components/project';
import Home from './components/home'
import Skills from './components/skills';
import Footer from './components/footer';
import LoadingPage from './components/loading';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

  return (
    <div>
      {loading ? (
        // Show the loading page if loading is true
        <LoadingPage />
      ) : (
        <>
        <Navbar />
        <Routes>
          <Route path ="/home" element={<Home/>}/>
          <Route path ="/about" element ={<About/>}/>
          <Route path ="/projects" element ={<Project/>}/>
          <Route path ="/experience" element ={<Experience/>}/>
          <Route path ="/skills" element ={<Skills/>}/>
          <Route path ="/contact" element ={<ContactForm/>}/>
        </Routes>
        <Footer/>
      </>  )}
      </div>
  );
};

export default App;
