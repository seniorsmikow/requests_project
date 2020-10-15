import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { getRequestsData } from '../../Redux/requests-store';
import Loader from '../Loader/Loader';

const columns = [
  { id: 'machineId', label: 'Номер станка', minWidth: 30, align: 'center', },
  { id: 'userName', label: 'Имя рабочего', minWidth: 100, align: 'center', },
  {
    id: 'time',
    label: 'Время',
    minWidth: 80,
    align: 'center',
  },
  {
    id: 'date',
    label: 'Дата',
    minWidth: 80,
    align: 'center',
  },
  {
    id: 'request',
    label: 'Заявка',
    minWidth: 200,
    align: 'center',
  },
];

function createData(machineId, userName, time, date, request) {
  //const density = population / size;
  return { machineId, userName, time, date, request };
}

let rows = [
  createData(),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '100px'
  },
  tableCell: {
    backgroundColor: '#427480'
  }, 
  container: {
    maxHeight: 440,
  },
  tableFooter: {
    backgroundColor: '#6bb8ca'
  }
});

function StickyHeadTable(props) {

  const getRequests = props.getRequestsData;

  useEffect(() => {
    getRequests();
  }, [getRequests]);


  rows = props.machines;


  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (

    props.isLoading ?
    <Loader />

    : <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className={classes.head}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    className={classes.tableCell}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          className={classes.tableFooter}
        />
      </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    machines: state.requests.machines,
    isLoading: state.requests.isLoading,
  }
}

export default(connect(mapStateToProps, {getRequestsData})(StickyHeadTable));
