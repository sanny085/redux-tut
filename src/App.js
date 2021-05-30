import React, {useState} from 'react'
import './App.css';
import User from './User';

import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
    {/*  const [name, setName] = useState({
         name:'Sanny Kumar',
         age : 21
      });*/}
     
  return (
    <div className="App">
    
       {/*<User data={{name}}/>*/} 
       <HeaderContainer/>
       <HomeContainer/>
         

    </div>
  );
}

export default App;

