import React from 'react';
import LoginForm from '../Forms/LoginForm';
import {connect} from 'react-redux';
import {setLoginData, resetLoginAlert} from '../../Redux/auth-store';
import { withRouter } from 'react-router-dom';


const LoginPage = props => {

    return (
        <React.Fragment>
            <LoginForm 
                email={props.email}
                password={props.password}
                setLoginData={props.setLoginData}
                isLogin={props.isLogin}
                resetIsLogin={props.resetLoginAlert}
            />
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    return {
        email: state.login.email,
        password: state.login.password,
        isAdmin: state.login.isAdmin,
        isUser: state.login.isUser,
        isRegistered: state.login.isRegistered,
        isLogin: state.login.isLogin
    };
};

export default withRouter(connect(mapStateToProps, {setLoginData, resetLoginAlert})(LoginPage));