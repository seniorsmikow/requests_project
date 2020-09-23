import React from 'react';
import classes from './Main.module.scss';

const Main = () => (
    <div className={classes.root}>
        <div className={classes.text}>
            Приложение "журнал неисправностей оборудования"
        </div>
    </div>
);

export default Main;