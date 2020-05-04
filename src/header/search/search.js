import React from 'react';
import css from './../header.module.css'

function Search() {
    return (
        <div className={css.search}>
            <input
                autoFocus
                placeholder='I HATE U!!11!11!'
            />
            <button>Искать</button>
        </div>
    );
}

export default Search;
