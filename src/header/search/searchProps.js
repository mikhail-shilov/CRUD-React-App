import React from 'react';
import {connect} from 'react-redux';

import {dataFilterAC, updateFindStringAC, dataFilterSortAC} from '../../redux/table-reducer';
import SearchTemplate from "./searchTemplate";

const mapStateToProps = (state) => {
    return {
        findString: state.table.settings.findDraft,
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        updateValue: (value) => {
            dispatch(updateFindStringAC(value));
        },
        dataFilter: () => {
            dispatch(dataFilterAC());
        },
    })
};

//создание результирующей компоненты на основе шаблона и приёмника данных
const Search = connect(mapStateToProps, mapDispatchToProps)(SearchTemplate);

export default Search;

