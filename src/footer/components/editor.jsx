import React from "react";
import css from "./../footer.module.css"

const Editor = (props) => {

    const inputHandler = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        props.updateItemInEditor(inputName, inputValue);
    }

    const saveHandler = () => {
        props.saveItemFromEditor(props.itemInEditor.id);
    }

    const cancelHandler = () => {
        props.closeEditor();
    }


    return (
            <div className={css.editor}>
                <input className={css.editorInput} name='id' disabled='true' value={props.itemInEditor.id} onChange={inputHandler}/>
                <input className={css.editorInput} name='firstName' value={props.itemInEditor.firstName} onChange={inputHandler}/>
                <input className={css.editorInput} name='lastName' value={props.itemInEditor.lastName} onChange={inputHandler}/>
                <input className={css.editorInput} name='eMail' value={props.itemInEditor.email} onChange={inputHandler}/>
                <input className={css.editorInput} name='telNo' value={props.itemInEditor.phone} onChange={inputHandler}/>
                <button className={css.editorInput} onClick={saveHandler}>Сохранить</button>
                <button className={css.editorInput} onClick={cancelHandler}>Отменить</button>
            </div>
    );
}

export default Editor;