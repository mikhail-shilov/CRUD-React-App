import React from 'react';
import {connect} from 'react-redux';

import {setSortModeAC} from '../../redux/table-reducer';
import TableTemplate from './tableTemplate';

const mapStateToProps = (state) => {
    return {
        tableColumns: state.table.settings.listColumnsOfTable,
        sortMode: state.table.settings.sortMode,
        sortDirection: state.table.settings.sortDirection,
        tableData: state.table.tableData
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        readTable: (mode) => {
            dispatch(setSortModeAC(mode));
        },
    })
};

//создание результирующей компоненты на основе шаблона и приёмника данных
const Table = connect(mapStateToProps, mapDispatchToProps)(TableTemplate);

export default Table;

