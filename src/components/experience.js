// Experience.jsx
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    title: "Internship Trainee",
    company: "TVS Training and Service limited",
    duration: "September '2021",
    description:
      "The training taught me the different types of sensors which is been used in the real word. Learned about the working and functionality of Arduino Board and some basic concepts about Iot. Presented an Iot application Idea for monitoring the heart rate of a person via the smart watch",
  },
  {
    title: "Summer Intern",
    company: "HCLTech",
    duration: "June 2023 - July 2023",
    description:
      "During the internship I have learnt about opencv, image processing techniques,deep learning models for object detection,pytesseract for OCR with which I have done traffic signal board detection using yolov3 object detection model.",
  },
  // Add more experiences as needed
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  };

  const handleClickRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  return (
    <div className="project-container">
      <h2>Experience</h2>
      <div className="project-slider">
        <button className="arrow-button" onClick={handleClickLeft}><FaArrowLeft /></button>
        <div className="project-card-container">
          {experiences.slice(currentIndex, currentIndex + 3).map((experience, index) => (
            <div className="experience-card" key={index}>
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <p>{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
        <button className="arrow-button" onClick={handleClickRight}><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Experience;
