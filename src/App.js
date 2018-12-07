import React, { Component } from 'react';
import './App.css';
import LandingHero from './components/LandingHero';
import AboutDreamshare from './components/AboutDreamshare';
import MeetTheTeam from './components/MeetTheTeam';
import HolidayActivities from './components/HolidayActivities';
import ActivitiesCta from './components/ActivitiesCta';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingHero/>
        <AboutDreamshare/>
        <MeetTheTeam/>
        <HolidayActivities/>
        <ActivitiesCta/>
        <Footer/>
      </div>
    );
  }
}

export default App;
