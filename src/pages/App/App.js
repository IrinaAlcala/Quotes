import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
//import * as QuoteAPI from '../../utils/QuoteService';
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


  //async componentDidMount() {
    //const Quotes = await QuoteAPI.getQuote('Quotes/');
    //const QuoteInfo = JSON.parse(Quotes)
    //this.setState({ QuoteInfo });
  //}

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
        
      
      </div>
    );
  }
}

export default App;