import React from "react";
import { useEffect,useState } from "react";
import myPhoto from "../assets/img1.jpeg"
function About() {


  const work = ["Frontend developer","Data analyst","Photographer"]
  const [word,setword] =useState(0)
  useEffect(() => {
    const interval = setInterval(() =>  {
      setword((prevIndex) => ((prevIndex + 1)%work.length));
    }, 3000);
    return () => clearInterval(interval);  
  },[work.length]);
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-me">About Me</h2>
        <p>
          Hello everyone, I am Tharun Kumar D S. <br /> I am a <br/>{" "}
          <span className="highlighted-text">{work[word]}</span>.
        </p>
        <p className="lefti">I am a final-year student pursuing a degree in Electronics and Communication Engineering at SSN College of Engineering. Passionate about technology, I specialize in Frontend development and have a keen interest in Machine Learning. Besides coding, I am an avid photographer, capturing moments through my lens to create captivating visuals.</p>
        <img className="photo"src={myPhoto} alt="something" />
      </div>
      <div className="scroll-down">
      </div>
    </div>
  );
}


export default About;
