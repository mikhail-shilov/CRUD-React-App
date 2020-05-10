import React from 'react';
import {connect} from 'react-redux';

import {setSortModeAC, setCurrentPageAC, loadItemToEditorAC} from '../../redux/table-reducer';
import TableTemplate from './tableTemplate';

const mapStateToProps = (state) => {
    return {
        tableColumns: state.table.settings.listColumnsOfTable,
        sortMode: state.table.settings.sortMode,
        sortDirection: state.table.settings.sortDirection,
        activeFilter: state.table.settings.activeFilter,
        tableData: state.table.tableDataOutput,
        itemsPerPage: state.table.settings.itemsPerPage,
        currentPage: state.table.settings.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        sortTable: (mode) => {
            dispatch(setSortModeAC(mode));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        loadItemToEditor: (id, firstName, lastName, eMail, telNo) => {
            dispatch(loadItemToEditorAC(id, firstName, lastName, eMail, telNo));
        },

    })
};

const Table = connect(mapStateToProps, mapDispatchToProps)(TableTemplate);

export default Table;

