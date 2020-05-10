import React from 'react';
import TableRow from "./tableRow";
import TablePagination from "./tablePagination";
import css from './../main.module.css'

function TableTemplate(props) {

    const reSortTable = (event) => {

        let mode = event.target.name;
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

    const startItem = props.itemsPerPage*(props.currentPage-1);
    const endItem = props.itemsPerPage*props.currentPage;
    const itemsCount = props.tableData.length;
    let rows = props.tableData.slice(startItem, endItem);

     rows=rows.map(
        row =>
            <TableRow
                id={row.id}
                firstName={row.firstName}
                lastName={row.lastName}
                email={row.email}
                phone={row.phone}
                loadItemToEditor={props.loadItemToEditor}
            />
    );

    return (
        <div>
            <span>{(props.activeFilter) ? 'Результаты поиска по запросу «'+props.activeFilter+'»':  '' }</span>
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
            <TablePagination
                currentPage={props.currentPage}
                itemsOnPage={props.itemsPerPage}
                itemsCount={itemsCount}
                setCurrentPage={props.setCurrentPage}
            />
        </div>
    );
}

export default TableTemplate;
