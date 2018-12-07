import React, { Component } from 'react';

class AboutDreamshare extends Component {
  render() {
    return (
      <div className="about-dreamshare">
        <h3 className="component-title site-container">How Dreamshare</h3>
        <div className="about-dreamshare--wrapper site-container">
          <div className="about-dreamshare__cards">
            <div className="card card-primary">
              <div className="card-copy--wrapper">
                <span className="card-copy--step">step 1</span>
                <h4 className="card-copy--title">Sed leo enim, condimentum</h4>
                <p className="card-copy--text">
                  Quisque libero libero, dictum non turpis in,
                  luctus semper lorem. Donec rhoncus a leo sit
                   amet facilisis.
                </p>
              </div>
            </div>
            <div className="card card-secondary">
              <div className="card-copy--wrapper">
                <span className="card-copy--step">step 2</span>
                <h4 className="card-copy--title">Sed leo enim, condimentum</h4>
                <p className="card-copy--text">
                  Quisque libero libero, dictum non turpis in,
                  luctus semper lorem. Donec rhoncus a leo sit
                   amet facilisis.
                </p>
              </div>
            </div>
            <div className="card card-tertiary">
              <div className="card-copy--wrapper">
                <span className="card-copy--step">step 3</span>
                <h4 className="card-copy--title">Sed leo enim, condimentum</h4>
                <p className="card-copy--text">
                  Quisque libero libero, dictum non turpis in,
                  luctus semper lorem. Donec rhoncus a leo sit
                   amet facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutDreamshare
