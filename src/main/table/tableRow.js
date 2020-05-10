import React from 'react';

function TableRow(props) {

    return (
        <tr onClick={() => {
            props.loadItemToEditor(props.id, props.firstName, props.lastName, props.email, props.phone);
        }}>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    );
}

export default TableRow;