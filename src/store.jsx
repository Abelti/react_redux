import { configureStore} from '@reduxjs/toolkit'

const reducer = (state, action) => {
    console.log('This is the Redux reducer')
    return state;
}

const store = configureStore({
    reducer
});


store.subscribe(() => {
    console.log(`The current state is `, store.getState())
});

store.dispatch({
    type: 'CHANGE_VALUE'
  })