import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import classes from './ScrollToTop.module.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ScrollToTop = () => {

    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(pageYOffset > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [pageYOffset]);

    if(!visible) {
        return false;
    }

    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});

    return (
        <div className={classes.toTopButton}>
            <ExpandLessIcon fontSize="large" onClick={scrollToTop}/>
        </div>
    )
}

export default ScrollToTop;