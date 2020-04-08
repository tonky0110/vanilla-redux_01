import React, { useState } from 'react';
import { connect } from 'react-redux';
import {actionCreators} from '../store';

function Home({toDos, addToDo, deleteToDo}) {
    const [ text, setText ] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    console.log("props:", toDos, addToDo, deleteToDo);
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {
                    JSON.stringify(toDos)
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
        addToDo: (text) => dispatch(actionCreators.addToDo(text)),
        deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id))
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);