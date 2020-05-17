import React from 'react';
import css from './loader.module.css'

function Loader(props) {

    const loadDataLoc = () => {
        props.loadData('internal');
    };
    const loadDataSmall = () => {
        props.loadData('smallDataSet');
    };
    const loadDataBig = () => {
        props.loadData('bigDataSet');
    };

    return (
        <div className={css.loader}>
            <button onClick={loadDataLoc}>Встроенный набор</button>
            <button onClick={loadDataSmall}>Малый набор</button>
            <button onClick={loadDataBig}>Большой набор</button>
        </div>
    );
}

export default Loader;
