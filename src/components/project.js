import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [{
        title: "Personality Type Detection",
        description: "An user input Classification of the person based on the Myer-Briggs personality type using NLTK toolkits to preprocess the given text data and XGbooster,KNN to classify the perosnality"
    },
    {
        title: "Smart Waste Management for commercial buildings",
        description: "Developed an IoT-based waste management system for efficient monitoring and segregation of waste, utilizing sensors and data analysis for optimized resource allocation andenvironmental sustainability..",
    },
    {
        title: "AI based Chatbot",
        description: "Created an AI-powered chatbot using NLP techniques, Flask for backend, and HTML/CSS/JS for frontend, providing real-time assistance and information to users for AICTE during a hackathon.",
    },
    {
        title: "Movie Recommendation system",
        description: "Implemented a movie recommendation system using scikit-learn library, utilizing collaborative filtering techniques to suggest movies to users based on their historical preferences and similarity with other users, improving movie discovery and user engagement...",
    },
    {
        title: "Computer vision with arduino",
        description: "Developed a gesture-controlled system using Arduino,integrating servo motor and LED, allowing intuitive control of devices based on hand movements, enhancing interactivity anduser experience.",
    },
];


const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const handleClickRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    return ( <
        div className = "project-container" >
        <
        h2 > Projects < /h2> <
        div className = "project-slider" >
        <
        button className = "arrow-button"
        onClick = { handleClickLeft } > < FaArrowLeft / > < /button> <
        div className = "project-card-container" > {
            projects.slice(currentIndex, currentIndex + 3).map((project, index) => ( <
                div className = "project-card"
                key = { index } >
                <
                h3 > { project.title } < /h3> <
                p > { project.description } < /p> <
                /div>
            ))
        } <
        /div> <
        button className = "arrow-button"
        onClick = { handleClickRight } > < FaArrowRight / > < /button> <
        /div>

        <
        /div>
    );
};

export default Project;