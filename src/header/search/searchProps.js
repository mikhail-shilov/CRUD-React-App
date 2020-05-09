import React from 'react';
import {connect} from 'react-redux';

import {dataFilterAC, updateFindStringAC, dataFilterSortAC} from '../../redux/table-reducer';
import SearchTemplate from "./searchTemplate";

const mapStateToProps = (state) => {
    return {
        findString: state.table.settings.findString,
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        updateValue: (value) => {
            dispatch(updateFindStringAC(value));
        },
        dataFilter: () => {
            dispatch(dataFilterSortAC('id', true));
        },
    })
};

//создание результирующей компоненты на основе шаблона и приёмника данных
const Search = connect(mapStateToProps, mapDispatchToProps)(SearchTemplate);

export default Search;

