import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../assets/styles/Main.scss';

function Main() {

  return (
    <section
      id="main"
      className="min-h-screen flex items-center justify-center"
    >
        <div className="container">
        <div className="about-section">
            <div className="image-wrapper">
            <img src="/profile.jpg" alt="Avatar" />
            </div>
            <div className="content">
            <div className="social_icons">
                <a href="https://github.com/MarcosOriolPago" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/marcos-oriol-pagonabarraga-a9a590143/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <h1>Marcos Oriol Pagonabarraga</h1>
            <p>Bioengineer | Software Engineer</p>

            <div className="mobile_social_icons">
                <a href="https://github.com/MarcosOriolPago" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/marcos-oriol-pagonabarraga-a9a590143/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
}

export default Main;