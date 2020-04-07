import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0, action) => {
  console.log(state, action);
  if (action.type === "ADD"){
    return state + 1;
  } else if (action.type === 'MINUS') {
    return state - 1;
  } else {
    return state;
  }
};

const countStore = createStore(countModifier);
const onChange = () => {
  number.innerText = countStore.getState();
}
const handleAdd = () => {
  countStore.dispatch({type: "ADD"});
}
const handleMinus = () => {
  countStore.dispatch({type: "MINUS"});
}
countStore.subscribe(onChange);
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
// add.addEventListener("click", () => countStore.dispatch({type: "ADD"}));
// minus.addEventListener("click", () => countStore.dispatch({type: "MINUS"}));
