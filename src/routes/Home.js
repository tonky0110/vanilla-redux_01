import React, { useState } from 'react';
import { connect } from 'react-redux';
import {add, remove} from '../store';
import ToDo from '../components/ToDo';

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
                    toDos.map(todo => <ToDo key={todo.id} {...todo}/>)
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
        addToDo: (text) => dispatch(add(text)),
        deleteToDo: (id) => dispatch(remove(id))
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);