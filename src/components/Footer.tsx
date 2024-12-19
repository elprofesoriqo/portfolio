import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/elprofesoriqo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/igor-jankowski-933280304/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Igor Jankowski</p>
      <p id="mail">igorjankowwski@gmail.com</p>
    </footer>
  );
}

export default Footer;