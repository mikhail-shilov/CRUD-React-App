import React from 'react';

function TableRow(props) {
    return (
        <tr onClick={() => {
            alert('Click on ROW: '+props.id)
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
