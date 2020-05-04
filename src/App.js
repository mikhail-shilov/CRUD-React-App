import React from 'react';
import './App.css';
import Header from "./header/header";
import Main from "./main/main";

function App(props) {
    console.log(props.state);
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
