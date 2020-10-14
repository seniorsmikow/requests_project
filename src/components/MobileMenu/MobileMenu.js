import React from 'react';
import classes from './MobileMenu.module.scss';
import Backdrop from './Backdrop/Backdrop';
import MenuIcon from '@material-ui/icons/Menu';


const MobileMenu = props => {
    return (
        <div>
          <Backdrop />  
          <div className={classes.mobile}>
            <MenuIcon />
          </div>
        </div>
    )
};

export default MobileMenu;