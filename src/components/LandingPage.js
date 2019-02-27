import React, { Component } from 'react'
import CrapMapLogo from './crapmapLogoWhite.png'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    /* just thoughts for what might need to change in state
      isNewUser: true,
      loggedIn: false,
      */
    }
  }

  CrapMapLogo() {
    // return <img src={CrapMapLogo} />
  }

  render() {
    return (
      <div className="landingPageContainer">
        <div className="landingPageGradient">
        <img className="emojiBackground" id="landingPageLogoContainer"/>
          <div ></div>
          <img src={CrapMapLogo} className="crapMapLogo"/>

        

        </div>
      </div>
      
    )
  }
}
{/* < div class = "landing-page-gradient" > */}
  {/* <
  img src = "images/crapmap-landing-page.png"
    class = "emoji-background" >
  <
  div id = "landing-page-logo-container"
class = "row"
style = "text-align: center" >
  <
  img src = "images/crapmap-logo-white.png"
alt = "CrapMap Logo" >
  <
  /div>

  <
  section id = "google-signup" >

  <
  div >
  <
  form action = "/action_page.php" >

  <
  div class = "row"
style = "text-align: center" >
  <!-- <h2 class="fontsize">Login with Google or Manually</h2> -->
  <
  a href = "#"
class = "google btn" >
  <
  i class = "fab fa-google" > < /i> Google+ <
  /a>

  <
  /div> <
  /form> <
  /div>

  <
  /section>

  <!-- <section id="login-container">

  <
  div class = "landing-page-button-container" >
  <
  button onclick = "document.getElementById('id01').style.display='block'"
style = "width:auto;" > Login < /button> <
  /div>

  <
  div id = "id01"
class = "modal" >

  <
  form class = "modal-content animate"
action = "/action_page.php" >

  <
  div class = "imgcontainer" >
  <
  span onclick = "document.getElementById('id01').style.display='none'"
class = "close"
title = "Close Modal" > & times; < /span> <
img src = "img_avatar2.png"
alt = "Avatar"
class = "avatar" >
  <
  /div>

  <
  div class = "container"
style = "background-color:#2E2D31; display: flex; flex-direction: column; align-items: center;" >
  <
  label
for = "uname" > < b > < /b></label >
  <
  input type = "text"
placeholder = "Enter Username"
name = "uname"
required >

  <
  label
for = "psw" > < b > < /b></label >
  <
  input type = "password"
placeholder = "Enter Password"
name = "psw"
required >

  <
  button type = "submit" > Login < /button> <
  /div>

  <
  div class = "container"
style = "background-color:#2E2D31; display: flex; flex-direction: column; align-items: center; border-radius: 25px;" >
  <
  button type = "button"
onclick = "document.getElementById('id01').style.display='none'"
class = "cancelbtn" >
  Cancel <
  /button> <
  span class = "psw" > Forgot < a href = "#" > password ? < /a></span >
  <
  /div>


  <
  /form> <
  /div>

  <
  /section> --> <
  /div> */}
