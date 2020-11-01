import React from 'react'; 

const NavBar = ({onRouteChange, isSignIn}) => {
	return(
		<nav style={{display:'flex', justifyContent: 'flex-end'}}>
			<p className='f3 black pa2'>How do I ..., </p>
			<p className='f3 link blue hover-dark-blue underline pa2 pointer'>Sign In</p>
			<p onClick={() => onRouteChange('register')} className='f3 link blue hover-dark-blue underline pa2 pointer'>Register</p>
		</nav>
	);
}

export default NavBar;		