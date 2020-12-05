import React from 'react';

import './NavigationBar.css';

class NavigationBar extends React.Component {
  onLogOut = () => {
    sessionStorage.clear();
  }

  render() {
    const isSignIn = this.props.isSignIn;
    const active = this.props.active;
    return (
      <div>
        {isSignIn ? (
          <div className='header'>
            <ul className='nav'>
              <li className={`navUser ${active === 'UserPage' ? 'active' : ''}`}>
                <a href='UserPage'>Symptom Tracking</a>
              </li>
              <li className={`navStat ${active === 'Stats' ? 'active' : ''}`}>
                <a href='Stats'>Stats</a>
              </li>
              <li className={`navTest ${active === 'TestingSite' ? 'active' : ''}`}>
                <a href='TestingSite'>Testing</a>
              </li>
              <li className={`navMap ${active === 'Map' ? 'active' : ''}`}>
                <a href='Map'>Map</a>
              </li>
              <li className='navLogOff' onClick={this.onLogOut}>
                <a href='/'>Log Off</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className='header'>
            <ul className='nav'>
              <li className={`navHome ${active === 'Home' ? 'active' : ''}`}>
                <a href='/'>Home</a>
              </li>
              <li className={`navSign ${active === 'SignIn' ? 'active' : ''}`}>
                <a href='SignIn'>Sign In</a>
              </li>
              <li className={`navReg ${active === 'Register' ? 'active' : ''}`}>
                <a href='Register'>Register</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default NavigationBar;
