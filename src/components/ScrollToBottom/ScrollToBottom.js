import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import classes from './ScrollToBottom.module.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const ScrollToBottom = props => {

    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if(pageYOffset > 400) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }, [pageYOffset]);

    if(!visible) {
        return true;
    }

    const mainDescriptionBlock = props.mainDescriptionBlock;

    const scrollToDescriptionBlock = () => window.scrollTo({top: mainDescriptionBlock.current.offsetTop, behavior: "smooth"});

    return (
        <div className={classes.toTopButton}>
            <ExpandMoreIcon fontSize="large" onClick={scrollToDescriptionBlock}/>
        </div>
    )
}

export default ScrollToBottom;