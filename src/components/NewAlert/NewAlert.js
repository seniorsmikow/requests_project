import React, { useContext } from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { AlertContext } from '../../Context/alert/alertContext';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}));

const NewAlert = () => {

    const classes = useStyles();

    const {alert, hide} = useContext(AlertContext);

    if(!alert) return null;

    return (
        <div className={classes.root}>
            <Alert onClose={hide}>
                {alert.text}
            </Alert>
        </div>
    )
};

export default NewAlert;