import React, {useState} from 'react'
import './App.css';
import User from './User';

function App() {
  const [name, setName] = useState({
    name:'Sanny Kumar',
    age : 21
  });
  return (
    <div className="App">
      <h1>App Component</h1>
      <User data={{name}}/>
    </div>
  );
}

export default App;

