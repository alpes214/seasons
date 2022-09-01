import React from 'react';
import { createRoot } from 'react-dom/client';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   console.log('rendered');
//   return (
//     <div>Hi there!</div>
//   );
// };

class App extends React.Component {

  render = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    )

    return (
      <div>Position:</div>
    );
  }

};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
