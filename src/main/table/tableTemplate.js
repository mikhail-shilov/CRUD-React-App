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

function TableTemplate(props) {

    const reSortTable = (event) => {

        let mode;
        //Много дублирования.
        //Но передавать event.target.name как есть внутрь мне не хочется по соображениям безопасности.
        //Надо будет ещё подумать.
        switch (event.target.name) {
            case 'id': mode = 'id'; break
            case 'firstName': mode = 'firstName'; break
            case 'lastName': mode = 'lastName'; break
            case 'eMail': mode = 'eMail'; break
            case 'telNo': mode = 'telNo'; break
            default: mode = 'id'; break
        }
        props.readTable(mode);

    }

    //Формирутеся массив заголовков столбцов на основе данных из props
    const rowNames = props.tableColumns.map(
        column =>
            <td>
                <a name={column.name} onClick={reSortTable}>
                    {column.label}
                    {(props.sortMode === column.name) ? (props.sortDirection === 'asc') ? ' ▲': ' ▼'  : ''}
                </a>
            </td>
    )

    //Формирутеся массив элементов на основе данных из props





    let rows = props.tableData.map((row) => row);




    rows.sort((a, b) => {
        let elemA;
        let elemB;

        switch (props.sortMode) {
            case 'id':
                elemA = a.id;
                elemB = b.id;
                break
            case 'firstName':
                elemA = a.firstName;
                elemB = b.firstName;
                break
            case 'lastName':
                elemA = a.lastName;
                elemB = b.lastName;
                break
            case 'eMail':
                elemA = a.email;
                elemB = b.email;
                break
            case 'telNo':
                elemA = a.phone;
                elemB = b.phone;
                break
            default:
                elemA = a.id;
                elemB = b.id;
                break
        }
        if (elemA < elemB) return (props.sortDirection === 'asc') ? -1 : 1;
        if (elemA > elemB) return (props.sortDirection === 'asc') ? 1 : -1;
        return 0;
    });

    rows = rows.map(
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
        <table border='1' cellSpacing='0' width='90%' className='table'>
            <thead>
                <tr>
                    {rowNames}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
);
}

export default TableTemplate;
