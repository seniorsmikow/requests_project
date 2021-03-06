import React from 'react';
import RegisterForm from '../Forms/RegisterForm';
import {connect} from 'react-redux';
import { setRegisterData } from '../../Redux/auth-store';


const RegisterPage = props => {

    return (
        <React.Fragment>
            <RegisterForm 
                email={props.email}
                password={props.password}
                setRegisterData={props.setRegisterData}
                kind={props.kind}
                isRegistered={props.isRegistered}
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
        kind: state.login.kind,
        showErrorAlert: state.login.showErrorAlert
    };
};

export default connect(mapStateToProps, {setRegisterData})(RegisterPage);