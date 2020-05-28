import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import QuotesPage from '../QuotesPage/QuotesPage';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';



class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }


  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
        <Route exact path='/signup' render={({ history }) =>
          <Signup
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        } />
        <Route exact path='/login' render={({ history }) =>
          <Login
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        } />
        <Route exact path='/quotes'
          render={({ history }) =>
          <QuotesPage 
          user={this.state.user}
            
          />
        } />
        </Switch>
      
      </div>
    );
  }
}

export default App;