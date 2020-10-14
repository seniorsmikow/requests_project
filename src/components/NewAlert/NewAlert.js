import React, { useContext } from 'react';
import Alert from '@material-ui/lab/Alert';
import classes from './NewAlert.module.scss';
import { AlertContext } from '../../Context/alert/alertContext';

const NewAlert = () => {

  const {alert, hide} = useContext(AlertContext);

  if(!alert) return null;

  return (
    <div className={classes.other}>
      <Alert variant="filled" severity={alert.text.severity || "info"} onClose={hide} >{alert.text.text}</Alert>
    </div>
  );
}

export default NewAlert;