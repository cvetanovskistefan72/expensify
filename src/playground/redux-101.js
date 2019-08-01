import { createStore } from 'redux';


const indementCount =({incrementBy =1}={})=>({
    type:'INCREMENT',
    incrementBy: incrementBy
})


const decrementCount =({decrementBy =1}={})=>({
    type:'DECREMENT',
    decrementBy:decrementBy
   
})

const resetCount =()=>({
    type:'RESET'
})

const setCount =({set}={})=>({
    type:"SET",
    set:set
    
})
const countReducer= (state = { count: 0 }, action) => {


    switch (action.type) {
        case 'INCREMENT': {
            
            return {
                count: state.count + action.incrementBy
            }
        }
        case 'DECREMENT': {
            
            return {
                count: state.count - action.decrementBy
            }
        }
        case 'RESET': {
            return {
                count: state.count = 0
            }
        }
        case "SET": {
            return {
                count: state.count = action.set
            }
        }
        default: {
            return state;
        }
    }

}
const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(indementCount({incrementBy:5}));

store.dispatch(indementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(setCount({set:101}))




