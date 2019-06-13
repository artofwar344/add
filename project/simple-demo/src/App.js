import React from 'react';
import './App.css';
import Index from './pages/index/Index.js';
import ReceivePrize from './pages/receivePrize/ReceivePrize.js';
import Login from './pages/login/Login.js';
import { Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
			<Switch>
				<Redirect from='/' exact to='/index' />
				<Route path="/index" exact component={Index} />
				<Route path='/receivePrize' exact component={ReceivePrize} />
				<Route path='/login' exact component={Login} />
			</Switch>
    </div>
  );
}

export default App;
