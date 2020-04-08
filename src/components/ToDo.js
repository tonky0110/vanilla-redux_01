import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

function ToDo({text, id, onBtnClick}) {
    function onClick(id) {
        onBtnClick(id);
    }
    return (
        <li>
            <Link to={`/${id}`}>
                {text}<button onClick={onClick}>DEL</button>
            </Link>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    });
}
export default connect(null, mapDispatchToProps)(ToDo);