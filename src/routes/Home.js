import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addToDo, deleteToDo} from '../store';

function Home(props) {
    const [ text, setText ] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        setText("");
        props.add(text);
    }
    console.log("props:", props);
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {
                    JSON.stringify(props.toDos)
                }
            </ul>
        </>
    );
};

const mapStateToProps = state => {
    return ({toDos: state});
}
const mapDispatchToProps = dispatch => {
    return ({
        add: (text) => dispatch(addToDo(text)),
        delete: (id) => dispatch(deleteToDo(id))
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);