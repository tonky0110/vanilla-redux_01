import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function ToDo({text, onBtnClick}) {
    function onClick(id) {
        onBtnClick(id);
    }
    return (
        <li>
            {text}<button onClick={onClick}>DEL</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    });
}
export default connect(null, mapDispatchToProps)(ToDo);