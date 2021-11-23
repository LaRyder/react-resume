import React from 'react';
import styles from './Skills.module.css'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Skills = () => {
    return (
            <div class="row">
            <div class= "sidebyside">
            <div className={styles.skillsText}></div>
            <h3><b><u>Specific Skills:</u></b></h3>
            <ul>
              <li>HP Server Hardware support</li>
              <li>Cisco, F5 and Juniper Network </li>
              <li>Datacenter network infrastructure</li>
              <li>Organized and efficient in a dynamic and high-pressure environment</li>
              <li>Experience in Bing, Office 365, Xbox, OneDrive and Microsoft Azure platforms</li>
              <li>Experience performing cable installations, hardware rack /stack installations, </li>
              <li>testing, and troubleshooting using standard datacenter processes.</li>
              <li>Problem Solving</li>
              <li>Verbal/Written Communication</li>
              <li>Microsoft Office</li>
              <li>MSAsset</li>
              <li>Phynet/ PNaaS</li>
              <li>GDCO</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>C#</li>
              <li>Javascript</li>
              </ul>
            </div>

            <aside>
            <h3><b><u>About Me:</u></b></h3>
        <dl>
          <dt><b>Address: </b></dt>
          <p>555 Forest Lane</p>
          <p>South Hill, Va 23970</p>
          <dt><b>Phone: </b></dt>
          <p>434-480-0222</p>
          <dt><b>Email: :</b></dt>
          <p>Lauren.Ryder@Microsoft.com</p>
        </dl>
        <a href="https://www.facebook.com/lauren.ryder.12/"> <FaFacebook></FaFacebook>__ </a> 
        <a href="https://www.linkedin.com/in/lauren-ryder-00675617b/"> <FaLinkedin></FaLinkedin>__ </a> 
        <a href="https://github.com/LaRyder"> <FaGithub></FaGithub> </a>
            </aside>
            </div>
        );
    }
    export default Skills;
