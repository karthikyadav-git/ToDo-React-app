import { useState } from "react";
import "./Note.css";

const Note = ({title = "Your Title...", content = "Your content goes here..."}) => {
    const [done, setDone] = useState(false);

    const toogleDone = () => {
        setDone(!done);
    };

    return (
        <div className="noteCard">
            <input type="checkbox" className="noteCheck" checked={done} onClick={toogleDone} />
            <h2 className={`noteTitle ${done && 'done'}`}>{title}</h2>
            <p className={`noteContent ${done && 'done'}`}>{content}</p>
        </div>
    );
};

// TODO: Note card element
// * Title and Content
// ? Toogle checkbox

export default Note;
