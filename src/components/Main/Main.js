import React from 'react';
import classes from './Main.module.scss';
import PhotoBlock from './PhotoBlock/PhotoBlock';
import DescriptionBlock from './DescriptionBlock/DescriptionBlock';
import MainFooter from './MainFooter/MainFooter';
import ScrollToTop from './../ScrollToTop/ScrollToTop';


const Main = () => {

    return ( <div className={classes.main}>
                <PhotoBlock />
                <DescriptionBlock />
                <MainFooter />
                <ScrollToTop />
            </div> )
};

export default Main;