import * as React from 'react';
import './App.css';
import { User, UserStates } from './common/user'

import logo from './logo.svg';
import { TeamPicker } from './components/TeamPicker';

class App extends React.Component {
  public render() {
    const user = new User();
    if (user.state === UserStates.Anonymous) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome Anonymous user, pick a team</h1>
          </header>
          <TeamPicker></TeamPicker>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      );
    }
  }
}

export default App;
