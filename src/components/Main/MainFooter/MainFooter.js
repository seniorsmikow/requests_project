import React from 'react';
import classes from './MainFooter.module.scss';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';

const MainFooter = () => {
    return (
        <div className={classes.mainFooter}>
            
            {/* <div className={classes.mainFooter__wrapper}>
                <div className={classes.mainFooter__title}>
                    РСК МИГ
                </div>
                <div className={classes.mainFooter__airplan_wrapper}>
                    <div className={classes.mainFooter__airplan_one}>
                        <LocalAirportIcon  fontSize="large"/>
                    </div>
                    <div className={classes.mainFooter__airplan_two}>
                        <LocalAirportIcon  fontSize="large"/>
                    </div>
                    <div className={classes.mainFooter__airplan_three}>
                        <LocalAirportIcon  fontSize="large"/>
                    </div>
                    <div className={classes.mainFooter__airplan_four}>
                        <LocalAirportIcon  fontSize="large"/>
                    </div>
                    <div className={classes.mainFooter__airplan_five}>
                        <LocalAirportIcon  fontSize="large"/>
                    </div>
                </div>
                
            </div> */}
            
            
        </div>
    )
};

export default MainFooter;