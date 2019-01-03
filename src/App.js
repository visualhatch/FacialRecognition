import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

import Particles from 'react-particles-js';

const particleOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};


class App extends Component {
  render() {
    return (
      <div className="App">
          <Particles className='particles' params={particleOptions} />

          <Navigation>

          </Navigation>

          <Logo>

          </Logo>

          <Rank>

          </Rank>

          <ImageLinkForm>

          </ImageLinkForm>

          {/*<FaceRecognition>*/}
              {/**/}
          {/*</FaceRecognition>*/}
      </div>
    );
  }
}

export default App;
