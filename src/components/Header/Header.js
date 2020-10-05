import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutAction} from '../../Redux/auth-store';
import {useHistory} from 'react-router-dom';
import classes from './Header.module.scss';
import Button from '@material-ui/core/Button';
import MenuToggle from '../MobileMenu/MenuToggle/MenuToggle';
import Drawer from '../MobileMenu/MenuToggle/Drawer/Drawer';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Header = props => {

    const [toggle, setToggle] = useState(false);

    const history = useHistory();

    const logout = () => {
        props.logoutAction();
        history.push('/loginpage');
    };

    const onClose = () => {
        setToggle(true);
    };

    return (
        <React.Fragment>
            <nav className={classes.header}>
                <div className={classes.header__menu}>
                    <div className={classes.mobileMenu}>
                        <Drawer isClose={toggle} menuToggleClose={onClose}/>
                        <MenuToggle onToggle={() => setToggle(!toggle)} isOpen={!toggle} menuToggleClose={onClose} />
                    </div>

                    {toggle && <div className={classes.mobileMenuOpen}></div>}
                    
                    <ul className={classes.header__ul}>
                        <li className={classes.header__li}>
                            <NavLink to='/'>Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to='/loginpage'>Вход</NavLink>
                        </li>
                        { props.isUser ? <li><NavLink to='/sendrequestpage'>Отправить заявку</NavLink></li> : null }
                        { props.isAdmin ? <li><NavLink to='/request'>Заявки</NavLink></li> : null }
                    </ul>
                </div>
                
                <div className={classes.headerLogoutBtn}>
                    <Button onClick={logout} variant="contained" color="secondary">Выйти</Button>
                </div>
            </nav>
        </React.Fragment>
        

    )

};

const mapStateToProps = state => {
    return {
        isLogin: state.login.isLogin,
        isAdmin: state.login.isAdmin,
        isUser: state.login.isUser
    }
}

export default withRouter(connect(mapStateToProps, {logoutAction})(Header));