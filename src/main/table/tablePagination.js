import React from 'react';
import {BrowserRouter, NavLink} from "react-router-dom";
import css from './../main.module.css'


function TablePagination(props) {


    let linksArray = [1,2,3,4,55];


    return (
        <BrowserRouter>
            <ul className={css.paginationArea}>
                {
                    linksArray.map((elem) =>
                        <li className={css.numberWrapper}>
                        <NavLink to={'page='+elem} className='number'>
                            {' ' + elem + ' '}
                        </NavLink>
                        </li>
                    )
                }
            </ul>
        </BrowserRouter>
    );
}

export default TablePagination;
