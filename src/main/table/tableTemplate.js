import React from 'react';
import TableRow from "./TableRow";
import TablePagination from "./tablePagination";
import css from './../main.module.css'

function TableTemplate(props) {

    const reSortTable = (event) => {

        let mode;
        switch (event.target.name) {
            case 'id':
                mode = 'id';
                break
            case 'firstName':
                mode = 'firstName';
                break
            case 'lastName':
                mode = 'lastName';
                break
            case 'eMail':
                mode = 'eMail';
                break
            case 'telNo':
                mode = 'telNo';
                break
            default:
                mode = 'id';
                break
        }
        //props.readTable(mode);
        props.sortTable(mode);


    }

    const rowNames = props.tableColumns.map(
        column =>
            <td>
                <a name={column.name} onClick={reSortTable}>
                    {column.label}
                    {(props.sortMode === column.name) ? (props.sortDirection === 'asc') ? ' ▲' : ' ▼' : ''}
                </a>
            </td>
    )


    const rows = props.tableData.map(
        row =>
            <TableRow
                id={row.id}
                firstName={row.firstName}
                lastName={row.lastName}
                email={row.email}
                phone={row.phone}
            />
    );

    return (
        <div>
            <table border='1' cellSpacing='0' width='90%' className={css.table}>
                <thead>
                <tr>
                    {rowNames}
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
            <TablePagination/>
        </div>
    );
}

export default TableTemplate;
