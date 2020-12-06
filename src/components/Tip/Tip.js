import React from 'react';
import classes from './Tip.module.scss';


const Tip = props => {
    return (
        <div className={classes.tipMain}>
            {props.text}
        </div>
    )
};

export default Tip;
