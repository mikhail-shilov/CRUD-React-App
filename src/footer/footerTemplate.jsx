import React from "react";
import css from "./footer.module.css"
import Editor from "./components/editor";

const FooterTemplate = (props) => {
    const message = 'Кликните по строке, данные которой желаете изменить...';
    return (
        <footer className='App-footer'>

            {(!(props.editorIsActive)) ? message :
                <Editor
                    itemInEditor={props.itemInEditor}
                    updateItemInEditor={props.updateItemInEditor}
                    saveItemFromEditor={props.saveItemFromEditor}
                    closeEditor={props.closeEditor}
                />}


        </footer>
    );
}

export default FooterTemplate;