import React, { Component } from 'react';

class LandingHero extends Component {
  render() {
    return (
      <div className="landing-hero">
        <div className="landing-hero__login--wrapper site-container">
          <div className="landing-hero__login--account-ctas">
            <a href="#" className="login-btn login-btn--login">Log in</a>
            <a href="#" className="login-btn login-btn--signup">Sign up</a>
          </div>
          <h1 className="landing-hero__login--title header-title">Dreamshare</h1>
        </div>
        <div className="landing-hero__header--wrapper">
          <h2 className="landing-hero__header--main header-main">Share your holiday dream!</h2>
          <h3 className="landing-hero__header--sub header-sub">And find the perfect partner to fullfill it</h3>
          <a href="#" className="landing-btn">Find your holiday partner</a>
        </div>
      </div>
    )
  }
}

export default LandingHero
