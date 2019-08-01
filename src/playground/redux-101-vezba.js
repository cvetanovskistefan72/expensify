import { createStore } from 'redux';


const incrementCount =({incrementBy=0}={})=>({
    type:"INCREMENT",
    incrementBy: incrementBy
})
const decrementCount =({decrementBy=0}={})=>({
    type:"DECREMENT",
    decrementBy: decrementBy
})
const countReducer =(state={count:0},action)=>{

    switch(action.type){
        case "INCREMENT":{
            return{
                count: state.count +action.incrementBy
            }
        }
        case "DECREMENT":{
            return{
                count: state.count - action.decrementBy
            }
        }
        default:{
            return state
        }
    }
}
const store = createStore(countReducer)


store.subscribe(()=>{
    console.log(store.getState())
})



store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(decrementCount({decrementBy:1}))






