import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfoBot from './InfoBot';
import BackgroundSlideshow from 'react-background-slideshow'

import image1 from './assets/images/background1.jpg'
import image2 from './assets/images/background2.jpg'
import image3 from './assets/images/background3.jpg'
import image4 from './assets/images/background4.jpg'
import image5 from './assets/images/background5.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 d-flex justify-content-start">
              <div className="loginHeader">
                <div className="company_logo"></div>
                <h4 className="card-title">Trusted Global Innovator</h4>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

        <BackgroundSlideshow images={[image1, image2, image3, image4, image5]}>
        </BackgroundSlideshow>

      </header>
      <footer className="App-footer container-fluid InfoBot">
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4 d-flex justify-content-center InfoBot ">
            <InfoBot />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
