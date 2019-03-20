import React from 'react';
import SignUpForm from './SignUp';
import BackgroundComponent from './BackgroundComponent';
import '../App.css'
import LogoComponent from './LogoComponent';


const SignUpPage = () => (
<div className="landingPage">
  <div className="landingPageGradient">
      <BackgroundComponent />
      <div className="landingPageLogoContainer" > 
        <LogoComponent />
      </div>
      <div className="signUpContainer">
          <h3>Create Your Account Here</h3>
          <SignUpForm />
      </div>
    </div>
  </div>
);
export default SignUpPage;