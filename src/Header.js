import React from 'react';
import { Component } from 'react';
import img from './Image/Lauren.jpg';

class Header extends Component {
    render (){
        return (
        <div class="top">
        <div class="header">
            <h1><strong>Lauren Ryder</strong></h1>
            <img src={img} alt="pic" class="bg-image"/>
            <p>Deployment Technician / Leap Apprentice</p>
            <p>Over 6 years of experience as a solution driven information technology professional with proven education and experience while delivering projects and throughput well within targeted SLAs.</p>
            </div>
        </div>
        );
    }   
}

export default Header;