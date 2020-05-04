import React from 'react';
import Table from "./table/tableProps";

let string = '<h1>А здесь будет таблица</h1>';

function Main(props) {
    return (
            <main className="App-main">
                <h1>Таблица с очень важными данными:</h1>
                <Table/>
            </main>
    );
}

export default Main;
