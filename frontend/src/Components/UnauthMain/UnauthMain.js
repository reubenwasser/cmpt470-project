import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import NavigationBar from '../NavigationBar/NavigationBar';
import "./UnauthMain.css"
import covidimg from"./covid1.jpg"
import prevention from "./prevention.jpg"


class UnauthMain extends Component {	
	render() {
    const isSignIn = sessionStorage.getItem('isSignIn');
    if (isSignIn) {
      // redirect the user to the user page if they are already logged in
      return <Redirect to={{ pathname: '/UserPage' }} />
    } else {
		  return(
        <div>
          <NavigationBar active='Home' isSignIn={false} />

            <div class="bodyMain"> 
              <p class="title">Did you know?</p>
            <div class="covid">
              <p ><strong>Coronavirus disease 2019 (COVID-19)</strong> is a contagious disease 
              caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). 
              </p>
            </div>
            
            <div class="trans">
              <p><strong>- Transmission</strong></p>
              <p>COVID-19 spreads from person to person mainly through the respiratory route after 
                an infected person coughs, 
                sneezes, sings, talks or breathes. A new infection occurs when virus-containing 
                particles exhaled by an infected person, 
                either respiratory droplets or aerosols, get into the mouth, nose, or eyes of other people 
                who are in close contact with the 
                infected person. </p>
            </div>

            <div class="test">
              <p><strong>- Testing</strong></p>
              <p>COVID-19 can provisionally be diagnosed on the basis of symptoms and confirmed using reverse transcription 
                polymerase chain reaction (RT-PCR) testing of infected secretions. Along with 
                laboratory testing, 
                chest CT scans may be helpful to diagnose COVID-19 in individuals with a high 
                clinical suspicion of infection. 
                Detection of prior infection is possible with serological tests, 
                which detect antibodies produced by the body in response to infection.</p>
              <p>For more information of Testing, please login and check the Testing Site Component:</p>
              <a href="/SignIn">Click Here to Login</a>
            </div>
            <div class="prevention">
              <p><strong>- Prevention</strong></p>
              <p> &bull; Social distancing</p>
              <p> &bull;<strong> Face masks</strong> and respiratory hygiene</p>
              <p> &bull; Surface cleaning</p>
            </div>
            <div class="treatment">
              <p><strong>- Treatment and management</strong></p>
              <p>The management of COVID-19 includes supportive care, which may include fluid therapy, 
                oxygen support, and supporting other affected vital organs.  The WHO is in the process 
                of including dexamethasone in guidelines for treatment for hospitalized patients, 
                and it is recommended for 
                consideration in Australian guidelines for patients requiring oxygen.  
                CDC recommends those who suspect 
                they carry the virus wear a simple face mask.  
                Extracorporeal membrane oxygenation (ECMO) 
                has been used to address 
                the issue of respiratory failure, but its benefits are still under consideration. 
                Personal hygiene and a healthy 
                lifestyle and diet have been recommended to improve immunity. 
                Supportive treatments may be useful in those with mild 
                symptoms at the early stage of infection.</p>
            </div>

            <div class="img">
            {/* reference shorturl.at/loDQV */}
            <img class="covidImg" src={covidimg} alt="covid img"/>
            </div>

            <div class="img1">
            {/* reference shorturl.at/loDQV */}
            <img class="preventionImg" src={prevention} alt="prevention img"/>
            </div>
          </div>
        </div>
		  )
    }
	}
}

export default UnauthMain;
