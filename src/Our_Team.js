import React from 'react';
import './Our_Team.css';

function Our_Team() {
  return (
    <div className='ResearchWork'>
        <div className="Abstract">
            <div className="Abstract-Header">
                MEET OUR TEAM
            </div>
            

            
        </div>

        <div className="stroke"></div>

        <div className="PhD-section">
            <div className="PhD-section-header">
                PhD Students:
            </div>
            <div className="PhD-Students">
                <div className="PhD-Student">
                    <img className="PhD-photo" src="http://home.iitj.ac.in/~akrathi/img/profile/Santosh_Bisoyi_PhD_April2022.jpg" alt="" />
                    <div className="PhD-info">
                        <div className="PhD-name">
                            Santosh Bisoyi
                        </div>
                        <div className="PhD-Research-Domain">
                            <b>Research Domain :</b> Structural Health Monitoring
                        </div>
                    </div>
                </div>
                <div className="PhD-Student">
                    
                    <img className="PhD-photo" src="http://home.iitj.ac.in/~akrathi/img/profile/Sahil_Rana_PhD_April2022.jpeg" alt="" />
                    <div className="PhD-info">
                        <div className="PhD-name">
                            Sahil Rana
                        </div>
                        <div className="PhD-Research-Domain">
                            <b>Research Domain :</b> Structural Reliability
                        </div>
                    </div>
                </div>

            </div>
        </div>




        <div className="MTech-section">
            <div className="MTech-section-header">
                MTech:
            </div>
            <div className="MTech-Students">
                <div className="MTech-Student">
                    <img className="MTech-photo" src="http://home.iitj.ac.in/~akrathi/img/profile/Amar_Kumar_MTech_April2022.jpg" alt="" />
                    <div className="MTech-info">
                        <div className="MTech-name">
                            Santosh Bisoyi
                        </div>
                        <div className="MTech-Research-Domain">
                            <b>Research Domain :</b> Structural Health Monitoring
                        </div>
                    </div>
                </div>
                

            </div>
        </div>


        <div className="Professional-Services">
            <div className="Professional-Services-header">Professional / Expert Services</div>
            <ol className="Professional-Services-terms">
                <li>Peer review of journal papers / projects related to research interests.</li>
                <li>Chartered Engineer: Performing tasks such as structural analysis and design, concrete mix design, investigation, retrofitting, structural safety audit, third party visits/inspections etc.</li>
                <li>Proof Consultant: Independent vetting of structural designs ensuring compliance as per standards/regulations/practices.</li>
            </ol>
        </div>


    </div>
  )
}

export default Our_Team