import React from 'react';
import {connect} from 'react-redux';

import FooterTemplate from "./footerTemplate";
import {closeEditorAC, loadItemToEditorAC, saveItemFromEditorAC, updateItemToEditorAC} from "../redux/table-reducer";

const mapStateToProps = (state) => {
    return {
        editorIsActive: state.table.settings.editorIsActive,
        itemInEditor: state.table.settings.itemInEditor
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
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

const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterTemplate);

export default Footer;

