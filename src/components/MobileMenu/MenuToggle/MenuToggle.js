import React from 'react';
import classes from './MenuToggle.module.scss';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const MenuToggle = props => {

    const cls = [
        classes.menuToggle,
    ];

    if(props.isOpen) {
        cls.push(classes.open);
    }

    return (
        <div className={cls.join(' ')}>
            <MenuIcon onClick={props.onToggle}/>
            {props.isOpen ? <div className={classes.closeIcon}><CloseIcon onClick={() => props.menuToggleClose()} /></div> : null}
        </div>
    )
};

export default MenuToggle;