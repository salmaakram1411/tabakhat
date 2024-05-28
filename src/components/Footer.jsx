import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footercontainer">
      <div className="socialicons">
        <a href="#/"><i className="fa-brands fa-facebook" /></a>
        <a href="#/"><i className="fa-brands fa-instagram" /></a>
        <a href="#/"><i className="fa-brands fa-youtube" /></a>
        <a href="#/"><i className="fa-brands fa-tiktok" /></a>
      </div>
      <div className="footerbottom">
        <p>Copyright ©2024; designed by <span className="designer">Tabakhat team</span></p>
      </div>
    </div>
  );
}

export default Footer;
