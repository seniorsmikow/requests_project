import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/Main/Main';
import Request from './components/Request/Request';
import SendRequestPage from './components/SendRequestPage/SendRequestPage';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import NewAlert from './components/NewAlert/NewAlert';
import { AlertState } from './Context/alert/alertState';


function App(props) {

  return (
    <AlertState>
      <BrowserRouter>
          <Header />
            <NewAlert />
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/loginpage" component={LoginPage}/>
              <Route path="/registerpage" component={RegisterPage}/>
              {
                props.isAdmin ? <Route path="/request" component={Request}/> : null
              }
              {
                props.isUser ? <Route path="/sendrequestpage" component={SendRequestPage}/> : null
              }
            </Switch>
      </BrowserRouter>
    </AlertState>
  );
}

const mapStateToProps = state => ({isAdmin: state.login.isAdmin,isUser: state.login.isUser})
  

export default connect(mapStateToProps, null)(App);
