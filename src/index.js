import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"; 
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log('action: ', action);
  switch(action.type){
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe( )

const onsubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  store.dispatch({
    type: ADD_TODO,
    text: input.value
  });
}
form.addEventListener("submit", onsubmit);
