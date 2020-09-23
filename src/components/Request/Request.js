import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRequestsData, getNewRequests, resetRequests } from '../../Redux/situation-store';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Request.module.scss';
import Loader from '../Loader/Loader';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    tableBtnTime: {
        color: 'white',
        backgroundColor: '#212831'
    },
    table: {
        minWidth: 700,
    },
    containerTable: {
        marginTop: '40px'
    }
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
root: {
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    },
},
}))(TableRow);
  

const Request = ({machines, getRequestsData, getNewRequests}) => {

    const classes = useStyles();

    useEffect(() => {
        getRequestsData();
    }, [getRequestsData]);

    const handleChange = () => {
        getNewRequests();
    };

    return (
        <div className={styles.mainOne}>
            <TableContainer component={Paper} className={styles.mainRequests}>
                <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell>Номер станка</StyledTableCell>
                    <StyledTableCell align="center">Имя рабочего</StyledTableCell>
                    <StyledTableCell align="center">Описание заявки</StyledTableCell>
                    <StyledTableCell align="center">Время</StyledTableCell>
                    <StyledTableCell align="right">Дата</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {machines.map(el => (
                    <StyledTableRow key={el.machineId}>
                        <StyledTableCell component="th" scope="row">
                        {el.machineId}
                        </StyledTableCell>
                        <StyledTableCell align="center">{el.userName}</StyledTableCell>
                        <StyledTableCell align="center">{el.request}</StyledTableCell>
                        <StyledTableCell align="center">{el.time}</StyledTableCell>
                        <StyledTableCell align="right">{el.date}</StyledTableCell>
                    </StyledTableRow>
                    ))}
                </TableBody>
                </Table>
                <Button onClick={handleChange} className={classes.tableBtnTime}>Показать новые</Button>
            </TableContainer>
        </div>
    )
    
};

const mapStateToProps = state => {
    return {
        machines: state.situation.machines,
        keys: state.situation.keys,
    }
};


export default connect(mapStateToProps, { getRequestsData, getNewRequests, resetRequests})(Request);