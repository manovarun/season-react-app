import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

export class App extends Component {
  state = {
    lat: null,
    error: ''
  };

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        console.log(err);
        this.setState({ error: err.message });
      }
    );
  };

  renderContent = () => {
    const { lat, error } = this.state;
    if (error && !lat) {
      return <div>Error: {error}</div>;
    }

    if (!error && lat) {
      return <SeasonDisplay lat={lat} />;
    }
    return <Spinner message='Please accept location' />;
  };

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

export default App;
