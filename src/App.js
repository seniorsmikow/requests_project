import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import {Redirect, Route, Switch, HashRouter} from 'react-router-dom';
import Main from './components/Main/Main';
import SendRequestPage from './components/SendRequestPage/SendRequestPage';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import NewAlert from './components/NewAlert/NewAlert';
import AboutSystemPage from './components/AboutSystemPage/AboutSystemPage';
import { AlertState } from './Context/alert/alertState';
import StickyHeadTable from './components/Request/NewRequests';

        
function App(props) {

  return (
    <AlertState>
      <HashRouter>
          <Header />
          <NewAlert />
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/loginpage" component={LoginPage}/>
              <Route path="/registerpage" component={RegisterPage}/>
              <Route path="/aboutSystemPage" component={AboutSystemPage}/>
              {
                props.isAdmin ? <Route path="/request" component={StickyHeadTable}/> : null
              }
              {
                props.isUser ? <Route path="/sendrequestpage" component={SendRequestPage}/> : null
              }
              <Redirect to={'/'} />
            </Switch>
      </HashRouter>
    </AlertState>
  );
}

const mapStateToProps = state => ({isAdmin: state.login.isAdmin, isUser: state.login.isUser})
  

export default connect(mapStateToProps, null)(App);
