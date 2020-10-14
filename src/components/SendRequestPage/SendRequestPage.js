import React from 'react';
import classes from './SendRequestPage.scss';
import {connect} from 'react-redux';
import {sendUserRequest, resetRequests} from '../../Redux/requests-store';
import RequestForm from '../Forms/RequestForm';

const SendRequestPage = props => {
    
    return (
        <div className={classes.sendRequestPage}>
            <RequestForm 
                email={props.email}
                password={props.password}
                isAdmin={props.isAdmin}
                isUser={props.isUser}
                isLogin={props.isLogin}
                isDisabled={props.isDisabled}
                machines={props.machines}
                sendUserRequest={props.sendUserRequest}
                error={props.error}
                isRequestsSend={props.isRequestsSend}
                resetRequests={props.resetRequests}
            />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        email: state.login.email,
        password: state.login.password,
        isAdmin: state.login.isAdmin,
        isUser: state.login.isUser,
        isLogin: state.login.isLogin,
        isDisabled: state.requests.isDisabled,
        machines: state.requests.machines,
        error: state.requests.error,
        isRequestsSend: state.requests.isRequestsSend
    }
};

export default connect(mapStateToProps, {sendUserRequest, resetRequests})(SendRequestPage);