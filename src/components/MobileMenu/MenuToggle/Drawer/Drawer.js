import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Drawer.module.scss';
import Backdrop from '../../Backdrop/Backdrop';
import { connect } from 'react-redux';
import { logoutAction } from '../../../../Redux/auth-store';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

let list = [
    {to: '/', label: 'Главная', exact: true},
    {to: '/loginpage', label: 'Авторизация', exact: true},
];

const Drawer = props => {

    const[isLogin, setLogin] = useState(props.isLogin);

    useEffect(() => {
        setLogin(isLogin);
    }, [isLogin]);

    if(props.isUser && props.isLogin === true) {
        list = [
            {to: '/', label: 'Главная', exact: true},
            {to: '/sendrequestpage', label: 'Отправить заявку', exact: true},
        ];
    } else if (props.isAdmin && props.isLogin === true) {
        list = [
            {to: '/', label: 'Главная', exact: true},
            {to: '/request', label: 'Заявки', exact: true},
        ];
    } else if (props.isLogin === false) {
        list = [
            {to: '/', label: 'Главная', exact: true},
            {to: '/aboutSystemPage', label: 'Документация', exact: true},
            {to: '/loginpage', label: 'Авторизация', exact: true},
        ];
    }


    const cls = [classes.drawer];

    if(props.isClose) {
        cls.push(classes.close);
    }

    const clickHandler = () => {
        props.menuToggleClose();
    };

    const history = useHistory();

    const exit = () => {
        props.logoutAction();
        history.push('/loginpage');
        props.menuToggleClose();
    };

    return (
        <React.Fragment>
            <div className={classes.root}>
                <nav className={cls.join(' ')}>
                        {
                            list.map((el, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <li key={index}>
                                            <button variant="contained">
                                                <NavLink to={el.to} exact={el.exact} activeClassName={classes.active} onClick={clickHandler}>
                                                    {el.label}
                                                </NavLink>
                                            </button>
                                        </li>
                                    </React.Fragment>
                                )
                            })
                        }
                
                    { props.isLogin ? <button onClick={exit} variant="contained">Выход</button> : null}
                </nav>
            </div>
            {props.isClose ? null : <Backdrop onClick={props.menuToggleClose} /> }
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    return {
        isLogin: state.login.isLogin
    }
};

export default withRouter(connect(mapStateToProps, {logoutAction})(Drawer));