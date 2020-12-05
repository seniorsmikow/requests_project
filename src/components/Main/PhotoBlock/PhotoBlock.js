import React from 'react';
import classes from './PhotoBlock.module.scss';
import BuildIcon from '@material-ui/icons/Build';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const PhotoBlock = () => {

    return (
        <div className={classes.photoBlock}>
            <div className={classes.photoBlock_title}>
                Журнал
                <div className={classes.photoBlock_subTitle}>
                    технического состояния оборудования
                </div>
                <div className={classes.photoBlock_icons__wrapper}>
                    <div className={classes.photoBlock_icons__item}>
                        <BuildIcon fontSize="large" />
                    </div>
                    <div className={classes.photoBlock_icons__item}>
                        <FlashOnIcon fontSize="large"/>
                    </div>
                    <div className={classes.photoBlock_icons__item}> 
                        <HourglassEmptyIcon fontSize="large"/>
                    </div>
                    <div className={classes.photoBlock_icons__item}>
                        <ReportProblemIcon fontSize="large"/>
                    </div>
                    <div className={classes.photoBlock_icons__item}>
                        <SettingsIcon fontSize="large"/>
                    </div>
                </div>
                <KeyboardArrowDownIcon />
            </div>
            
        </div>
    )
};

export default PhotoBlock;
