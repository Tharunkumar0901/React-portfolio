// Skills.jsx
import React from "react";
import { FaPython, FaCode, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { SiMysql, SiTensorflow, SiKeras, SiOpencv, SiPandas, SiNumpy, SiFlask,SiRaspberrypi, SiReact } from "react-icons/si";

const skills = [ { name: "Python", icon: <FaPython / > },
    { name: "C++", icon: < FaCode / > },
    { name: "HTML", icon: < FaHtml5 / > },
    { name: "CSS", icon: < FaCss3 / > },
    { name: "JavaScript", icon: < FaJs / > },
    { name: "MySQL", icon: < SiMysql / > },
    { name: "Scikit", icon: < SiPandas / > },
    { name: "TensorFlow", icon: < SiTensorflow / > },
    { name: "Keras", icon: < SiKeras / > },
    { name: "OpenCV", icon: < SiOpencv / > },
    { name: "Pandas", icon: < SiPandas / > },
    { name: "Numpy", icon: < SiNumpy / > },
    { name: "Flask", icon: < SiFlask / > },
    { name: "ReactJS", icon: < SiReact / > },
    {name:"Nltk",icon:<FaCode />},
    {name:"Matplotlib",icon:<FaCode />},
    {name:"Seaborn",icon:<FaCode />},
    { name: "Linux", icon: < FaCode / > },
    {name:"RaspberryPi",icon:<SiRaspberrypi/>},
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Skills;
