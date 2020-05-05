import React from 'react';
import './App.css';
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/Footer";

function App(props) {
    console.log(props.state);
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
