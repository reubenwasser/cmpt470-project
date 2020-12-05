import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import NavigationBar from '../NavigationBar/NavigationBar';
import "./UnauthMain.css"


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

          <div className="bodyMain"> 
              <h1>Did you know?</h1>
                <p><strong>Coronavirus disease (COVID-19)</strong> is an infectious 
                  disease caused by a newly discovered coronavirus. </p>
                <p>Most people infected with the COVID-19 virus will experience 
                    mild to moderate respiratory illness and recover without 
                    requiring special treatment.  Older people, and those with 
                    underlying medical problems like cardiovascular disease, 
                    diabetes, chronic respiratory disease, and cancer are more 
                    likely to develop serious illness.</p>
                <details>
                  <summary>Read more!!!</summary>
                    <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1">WHO CoronaVirus Information</a>
                </details> 
            </div>
        </div>
		  )
    }
	}
}

export default UnauthMain;