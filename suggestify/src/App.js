import React from 'react';
import UserLog from './components/UserLog'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Suggestify!</h1>
      </header>
      {/* We can decide where to put the login/register page. for now i'll render it here so it's easier to see/work with */}
      <UserLog/>
    </div>
  );
}

export default App;
