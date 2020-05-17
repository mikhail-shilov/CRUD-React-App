import React from 'react';
import './App.css';



import Loader from "./components/loader/loader";
import Search from "./components/search/search";
import Table from "./components/table/table";
import Editor from "./components/editor/Editor";

function App(props) {

    const message = 'Кликните по строке, данные которой желаете изменить...';

    const editor = () => {return <Editor
        itemInEditor={props.settings.itemInEditor}
        updateItemInEditor={props.settings.updateItemInEditor}
        saveItemFromEditor={props.settings.saveItemFromEditor}
        closeEditor={props.settings.closeEditor}
    />};
    if (props.tableOutput.length === 0) props.loadData('internal');
    return (
        <div className='App'>
            <header className='App-header'>
                <Loader loadData={props.loadData}/>
                <h1>Демонстрационное react-приложение</h1>
                <Search
                    findString={props.settings.findDraft}
                    updateValue={props.updateValue}
                    dataFilter={props.dataFilter}/>
            </header>
            <main className='App-main'>
                <div className='container'>
                <h1 className='header'>Очень важные данные:</h1>
                <Table
                    tableColumns={props.settings.listColumnsOfTable}
                    sortMode={props.settings.sortMode}
                    sortDirection={props.settings.sortDirection}
                    activeFilter={props.settings.activeFilter}
                    itemsPerPage={props.settings.itemsPerPage}
                    currentPage={props.settings.currentPage}
                    isDataLoading={props.settings.isDataLoading}
                    tableData={props.tableOutput}
                    sortTable={props.sortTable}
                    setCurrentPage={props.setCurrentPage}
                    loadItemToEditor={props.loadItemToEditor}
                />
                </div>
            </main>
            <footer className='App-footer'>
                {(!(props.settings.editorIsActive)) ? message : editor()}
            </footer>
        </div>
    );
}

export default App;
