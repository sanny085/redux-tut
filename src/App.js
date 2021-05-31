import React, {useState} from 'react'
import './App.css';
import User from './User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
import PageNotFound from './components/PageNotFound';


function App() {
    {/*  const [name, setName] = useState({
         name:'Sanny Kumar',
         age : 21
      });*/}
     
  return (
    <div className="App">
    
       {/*<User data={{name}}/>*/} 
       <Router>
         <Switch>
            <Route exact path="/header" >
              <HeaderContainer/>
            </Route>
          
            <Route exact path="/">
               <HomeContainer/>
            </Route>

            <Route exact path="*" component={PageNotFound} /> 
         </Switch>
       </Router>
       
    </div>
  );
}

export default App;

