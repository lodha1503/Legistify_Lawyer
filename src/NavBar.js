import React from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css'


export default function NavBar() {
    return (
    <div className="header">

        <div className="container">
            
              <div className="part1 Shreyansh">
                    <div className="text">
                      <NavLink to="/" className="text">Shreyansh Attorneys</NavLink> 
                    </div>
              </div>
        
          
          
          <ul className="part2">
                <li >
                      <NavLink to="/" id="one">Home</NavLink> 
                </li>
                <li >
                      <NavLink to="/Appointment" id="two">Book Appointment</NavLink> 
                </li>
                <li >
                      <NavLink to="/our_team" id="three">Our Team</NavLink> 
                </li>    
          </ul>
        </div>
          
          

    </div>
    );
}