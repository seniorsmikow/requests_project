import React from 'react';
import classes from './PhotoBlock.module.scss';
import BuildIcon from '@material-ui/icons/Build';
import SettingsIcon from '@material-ui/icons/Settings';
import TimerIcon from '@material-ui/icons/Timer';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const PhotoBlock = () => {

    return (
        <div className={classes.photoBlock}>
            <div className={classes.photoBlock_title}>
                Журнал
                <div className={classes.photoBlock_subTitle}>
                    технического состояния оборудования
                </div>
                <div className={classes.photoBlock_icons__wrapper}>
                    <div className={classes.photoBlock_icons__item__one}>
                        <i><BuildIcon fontSize="large" /></i>
                    </div>
                    <div className={classes.photoBlock_icons__item__two}>
                        <TimerIcon fontSize="large"/>
                    </div>
                    <div className={classes.photoBlock_icons__item__three}> 
                        <AllInclusiveIcon fontSize="large"/>
                    </div>
                    <div className={classes.photoBlock_icons__item__four}>
                        <DeleteSweepIcon fontSize="large"/>
                    </div>
                    <div className={classes.photoBlock_icons__item__five}>
                        <SettingsIcon fontSize="large"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PhotoBlock;
