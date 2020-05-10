import React from 'react';
import css from './../main.module.css'


function TablePagination(props) {

    let linksArray = [];
    const itemsOnPage = props.itemsOnPage;
    const itemsCount = props.itemsCount;
    const pagesCount = Math.ceil(itemsCount / itemsOnPage);

    for (let i = 1; i <= pagesCount; i++) {
        linksArray.push(i);
    }

    return (
        <ul className={css.paginationArea}>
            {
                linksArray.map((elem) =>
                    <li className={(elem == props.currentPage) ? css.numberWrapper + ' ' + css.numberActive : css.numberWrapper}>
                        <a onClick={() =>{
                            props.setCurrentPage(elem);
                        }}>
                            {elem}
                        </a>
                    </li>
                )
            }
        </ul>
    );
}

export default TablePagination;
