import React from 'react';
import {connect} from 'react-redux';

import {setSortModeAC, dataFilterSortAC} from '../../redux/table-reducer';
import TableTemplate from './tableTemplate';

const mapStateToProps = (state) => {
    return {
        tableColumns: state.table.settings.listColumnsOfTable,
        sortMode: state.table.settings.sortMode,
        sortDirection: state.table.settings.sortDirection,
        tableData: state.table.tableDataOutput
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        sortTable: (mode) => {
            dispatch(setSortModeAC(mode));
        },

    })
};

const Table = connect(mapStateToProps, mapDispatchToProps)(TableTemplate);

export default Table;

