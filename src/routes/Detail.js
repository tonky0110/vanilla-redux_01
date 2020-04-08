import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({toDo}) {
    console.log('toDo: ', toDo);
    return (
        <>
            <h1>{toDo?.text}</h1>
    <h1>created at: {toDo?.id}</h1>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const { 
        match: { 
            params: { id }
        }
    } = ownProps;
    console.log('state: ', state, id);
    const toDo = state.find(todo => {
        console.log(todo.id === id, typeof todo.id, typeof id);
        return todo.id === (parseInt(id));
    });
    return ({ toDo });
}

const mapDispatchToProps = dispatch => {
    return ({});
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);