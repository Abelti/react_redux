import './App.css';
import { configureStore } from '@reduxjs/toolkit';
export default function App() {
const reducer = (state = 0, action) => {
  console.log(`State: `, state)
  if(action.type === 'ADD'){
    return state + action.data;
  }
  else if (action.type === 'RESET_VALUE'){
    return state - action.data;
  }
  //console.log(`Reducer function`)
  return state;
}

const store = configureStore({reducer});
console.log(`get state`, store.getState())

store.subscribe(() => {
  console.log(`Here is the current state`, store.getState());
});

store.dispatch({
  type: 'ADD',
  data: 5
});

store.dispatch({
  type: 'ADD',
  data: 10
});

store.dispatch({
  type: 'ADD',
  data: 15
});

store.dispatch({
  type: 'RESET_VALUE',
  data: 22
});
}