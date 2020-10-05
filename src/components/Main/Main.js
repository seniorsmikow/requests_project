import React from 'react';
import classes from './Main.module.scss';
import PhotoBlock from './PhotoBlock/PhotoBlock';
import DescriptionBlock from './DescriptionBlock/DescriptionBlock';
import MainFooter from './MainFooter/MainFooter';

const Main = () => {

    return ( <div className={classes.main}>
                <PhotoBlock />
                <DescriptionBlock />
                <MainFooter />
            </div> )
};

export default Main;