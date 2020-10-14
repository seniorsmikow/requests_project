import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    flexDirection: 'column',
    fontSize: '15px',
    textTransform: 'uppercase',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  loader: {
    marginTop: '20px'
  }
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Загрузка данных...
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    </div>
  );
}