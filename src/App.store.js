import React from 'react';
import {connect} from 'react-redux';

import AppTemplate from "./App";
import {
    closeEditorAC,
    loadItemToEditorAC,
    saveItemFromEditorAC,
    updateItemToEditorAC,
    dataFilterAC,
    loadAC,
    setCurrentPageAC,
    setSortModeAC,
    updateFindStringAC, switchIndicator
} from "./redux/table-reducer";

const mapStateToProps = (state) => {
    return {
        settings: state.table.settings,
        tableOutput: state.table.tableDataOutput,
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({

        //Диспатчи компонента table
        sortTable: (mode) => {
            dispatch(setSortModeAC(mode));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },

        //Диспатчи компонента loader
        loadData: (source) => {
            const dataLoader = (dbPath) => {
                debugger
                dispatch(switchIndicator());
                fetch(dbPath)
                    .then(response => response.json())
                    .then(data => dispatch(loadAC(data)))
                    .then(() => dispatch(switchIndicator()))}

            let dbPath;
            switch (source) {
                case 'bigDataSet':
                    dbPath = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
                    dataLoader(dbPath);
                    break
                case 'smallDataSet':
                    dbPath = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
                    dataLoader(dbPath);
                    break
                default:
                    dispatch(loadAC('internal'));
                    break;
            }
        },
        //Диспатчи компонента search

        updateValue: (value) => {
            dispatch(updateFindStringAC(value));
        },
        dataFilter: () => {
            dispatch(dataFilterAC());
        },

//Диспатчи компонента editor
        loadItemToEditor: (id, firstName, lastName, eMail, telNo) => {
            dispatch(loadItemToEditorAC(id, firstName, lastName, eMail, telNo));
        },
        updateItemInEditor: (inputName, value) => {
            dispatch(updateItemToEditorAC(inputName, value));
        },
        saveItemFromEditor: (id) => {
            dispatch(saveItemFromEditorAC(id));
        },
        closeEditor: () => {
            dispatch(closeEditorAC());
        }
    })
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppTemplate);

export default App;

