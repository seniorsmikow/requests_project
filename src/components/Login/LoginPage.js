import React from 'react';
import LoginForm from '../Forms/LoginForm';
import {connect} from 'react-redux';
import {setLoginData} from '../../Redux/auth-store';
import { withRouter } from 'react-router-dom';


const LoginPage = props => {

    return (
        <React.Fragment>
            <LoginForm 
                email={props.email}
                password={props.password}
                setLoginData={props.setLoginData}
                isLogin={props.isLogin}
                isAdmin={props.isAdmin}
                isUser={props.isUser}
                isShowAlert={props.isShowAlert}
                showErrorAlert={props.showErrorAlert}
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
        isLogin: state.login.isLogin,
        isShowAlert: state.login.isShowAlert,
        showErrorAlert: state.login.showErrorAlert
    };
};

export default withRouter(connect(mapStateToProps, {setLoginData})(LoginPage));