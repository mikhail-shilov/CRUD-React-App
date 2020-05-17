import React from 'react';
import css from './search.module.css'

function Search(props) {

    const findHandler = () => {
        props.dataFilter();
    }
    const updateValue = (event) => {
        const text = event.target.value;
        props.updateValue(text);
    }
    const keyHandler = (event) => {
        if (event.key === 'Enter') {
            props.dataFilter(event.target.value);
        }
    };

    return (
        <div className={css.search}>
            <input
                value={props.findString}
                autoFocus
                placeholder='Фрагмент имени или фамилии'
                onChange={updateValue}
                onKeyPress={keyHandler}

            />
            <button onClick={findHandler}>Искать</button>
        </div>
    );
}

export default Search;
