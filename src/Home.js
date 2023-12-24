import React from "react";
import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='home'>
       
      <div className="total">
        <div className="main">

          <div className='left'>
            <div className='image'>
              <img src="https://www.barrattorneys.com/app/uploads/2020/10/introduction-img-1-1.jpg" alt="" className="ak" />
            </div>
              
          </div>

          <div className="right">
            <p className='first'>
            Shreyansh & Co. Attorneys
            </p>
            <p className="second">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="third">
            Shreyansh's Attorneys is a prestigious law firm specializing in estate and trust litigation, prioritizing expert representation for trustees, beneficiaries, and heirs. Our practice navigates complex cases, including fraud allegations, fiduciary duty breaches, trust and will disputes, contested conservatorships, elder abuse issues, and securities litigation. We ensure transparency and accountability in trust management and advocate for justice. Our dedication extends to safeguarding elderly individuals from mistreatment and addressing securities fraud. We are committed to delivering exceptional legal representation, leveraging our profound knowledge of estate and trust law in these intricate and emotionally charged proceedings. Trust Shreyansh's Attorneys for specialized and unwavering legal support.
            </p>

          </div>

        </div>
        <div className="options">
            <NavLink to="/Appointment" className="opt-link-rnw">
                <div className="opt3">
                      Book Appointment
                </div>
            </NavLink>
            <NavLink to="/opportunities" className="opt-link-opportunities">
                <div className="opt3">
                    Opportunities
                </div>
            </NavLink>
          
            <NavLink to="/team" className="opt-link-publications">
                <div className="opt3">
                  Our Team
                </div>
            </NavLink>
          
        </div>

        
      </div>
  
    </div>
  )
}

export default Home
