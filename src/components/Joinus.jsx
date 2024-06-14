import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Joinus.css';
import video from '../assets/joinus.MOV';

const Joinus = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleJoinClick = () => {
        navigate('/Signupchef'); // Navigate to the Sign Up page
    };

    return (
        <div className="hero">
            <div className="join-heading">
                <h1>Join Us</h1>
            </div>
            <div className="join-container">
                <div className="hero-content">
                    <h2>Calling all chefs!</h2>
                    <p> Are you ready to Showcase your signature dishes and expand your culinary reach with our easy-to-use platform designed for passionate home cooks like you.</p>
                    <button className='joinbtn' onClick={handleJoinClick}>Join us</button> {/* Add onClick handler */}
                </div>
                <div className="hero-video">
                    <video controls autoPlay muted loop> {/* autoPlay should be camelCase */}
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Joinus;



