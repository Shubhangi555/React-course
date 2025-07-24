// import { createStore } from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {counter:0, showCounter:true};

const counterSlice= createSlice({
    name: 'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;  // redux automatically create a clone 
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});


const initialAuth={isAuthenticated:false};

 const authSlice=createSlice({
    name:"auth",
    initialState:initialAuth,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
})

// store has created
// reducer is a function that takes state and action and returns new state.
// reducer is a pure function, it does not have any side effects.

// const counterReducers = (state = initialState, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//         }
//     }
//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//         }
//     }
//     return state;
// }

const store = configureStore({
   reducer: { counter : counterSlice.reducer, auth: authSlice.reducer}
});
export const counterActions= counterSlice.actions  // behind the scene actions will create an identifier
export const authActions = authSlice.actions //exposes actions, behind the scene actions will create an identifier

export default store;


