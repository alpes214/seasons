import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {lat: null, errorMessage: ''};
    
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    )
  }

  render = () => {
    return (
      <div>
      <div>Position: {this.state.lat}</div>
      <br />
      <div>Error: {this.state.errorMessage}</div>
      </div>
    );
  }

};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
