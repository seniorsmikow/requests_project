import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRequestsData, getNewRequests, resetRequests } from '../../Redux/requests-store';
import Paper from '@material-ui/core/Paper';
import {
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';


import { generateRows } from '../Helpers/generator';

function NewRequests() {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <PagingState
          defaultCurrentPage={0}
          pageSize={5}
        />
        <IntegratedPaging />
        <Table />
        <TableHeaderRow />
        <PagingPanel />
      </Grid>
    </Paper>
  );
};


const mapStateToProps = state => {
    return {
        machines: state.requests.machines,
        keys: state.requests.keys,
        isLoading: state.requests.isLoading,
    }
};

export default connect(mapStateToProps, { getRequestsData, getNewRequests, resetRequests })(NewRequests);