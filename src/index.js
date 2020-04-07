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
      return [
        {
          text: action.text,
          id: Date.now()
        },
        ...state
      ];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(toDo => {
    const { id, text } = toDo;
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    li.id = id;
    li.innerText = text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(() => { console.log(store.getState());});
store.subscribe(paintToDos);

const addToDo = text => {
  store.dispatch({
    type: ADD_TODO,
    text
  });
}

const onsubmit = (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  addToDo(text);
}

form.addEventListener("submit", onsubmit);
