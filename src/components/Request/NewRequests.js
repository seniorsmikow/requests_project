import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRequestsData, deleteRequests } from '../../Redux/requests-store';
import Loader from '../Loader/Loader';
import Button from '@material-ui/core/Button';
import classes from './NewRequests.module.scss';

const Table = props => {

  const getRequests = props.getRequestsData;

  useEffect(() => {
    getRequests();
  }, [getRequests]);


  let rows = props.machines;

  const deleteRequest = id => {
    props.deleteRequests(id);
  };

  return (
    <div className={classes.mainNewRequests}>
      {props.isLoading ?
      <Loader /> :

      <div className={classes.table}>
        {rows.length ? 
          <table>
            
          <tr>
            <th>Номер станка</th>
            <th>Имя рабочего</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Заявка</th>
            <th>Действие</th>
          </tr> 
          
            
          
              {rows.map(row => (
                <>
                <tr key={row.id}>
                  <td>{row.machineId}</td>
                  <td>{row.userName}</td>
                  <td>{row.date}</td>
                  <td>{row.time}</td>
                  <td>{row.request}</td>
                  <td id={row.machineId}>
                    <Button variant="contained" onClick={() => deleteRequest(row.id)}>выполнена</Button>
                  </td>
                </tr>
                </>
              )) }
            
          
          </table>
          :
          <div className={classes.text}>Заявки отсутствуют</div>
        }
        
      </div>
    }   
    </div>
  )
};

const mapStateToProps = (state) => {
    return {
      machines: state.requests.machines,
      isLoading: state.requests.isLoading,
    }
  }

export default (connect(mapStateToProps, {getRequestsData, deleteRequests})(Table));