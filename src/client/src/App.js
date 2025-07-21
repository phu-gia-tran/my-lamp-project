// src/App.js

import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <ProjectList />
      </main>
    </div>
  );
}

export default App;