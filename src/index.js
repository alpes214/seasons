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
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    return <div>Loading . . . . .</div>
  }

  componentDidMount() {
    console.log('Did mount');
  }

  componentDidUpdate() {
    console.log('Did update');
  }

};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
