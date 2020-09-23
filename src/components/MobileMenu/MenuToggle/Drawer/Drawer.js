import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Drawer.module.scss';
import Backdrop from '../../Backdrop/Backdrop';


const list = [
    {to: '/', label: 'Главная', exact: true},
    {to: '/loginpage', label: 'Авторизация', exact: true},
    {to: '/registerpage', label: 'Регистрация', exact: true},
    {to: '/request', label: 'Заявки', exact: true},
    {to: '/sendrequestpage', label: 'Отправить заявку', exact: true},
    {to: '/adminmain', label: 'hz', exact: true}
];

const Drawer = props => {

    const cls = [classes.drawer];

    if(props.isClose) {
        cls.push(classes.close);
    }

    const clickHandler = () => {
        props.menuToggleClose();
    };

    return (
        <React.Fragment>
            <nav className={cls.join(' ')}>
                <div className={classes.root}>
                        {
                            list.map((el, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={el.to} exact={el.exact} activeClassName={classes.active} onClick={clickHandler}>
                                            {el.label}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                </div>
            </nav>
            {props.isClose ? null : <Backdrop onClick={props.menuToggleClose} /> }
        </React.Fragment>
    )
};

export default Drawer;