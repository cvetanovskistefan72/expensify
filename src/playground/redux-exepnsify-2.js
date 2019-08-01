import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'
//expenses
//Add names and surnames
const add = ({ name = "", surname = "", price = 0 }) => ({
    type: "ADD",
    expense: {
        id: uuid(),
        name: name,
        surname: surname,
        price: price
    }
})
//remove 
const remove = ({ id }) => ({
    type: "REMOVE",
    id: id
})
//filters

const setText = (text = "") => ({
    type: "TEXT",
        text: text
})
const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD": {
            return [
                ...state,
                action.expense
            ]
        }
        case "REMOVE": {
            return state.filter((expense) => {
                return expense.id !== action.id
            })

        }
        default: {
            return state;
        }
    }
}

const filtersReducer = (state = {name:"",text:""}, action) => {
    switch (action.type) {
        case "TEXT":{
            return{
                text:action.text
            }
        }
        default: {
            return state;
        }
    }
}




//functions
const SortByText=(expenses,{text,name})=>{


    return expenses.filter((expense)=>{
        const textMatch=expense.name.toLowerCase().includes(text.toLowerCase())
        return textMatch;
    })
}
const SortByPrice=(expenses,{text,name})=>{
    return expenses.sort((a,b)=>{
        return a.price < b.price ? 1:-1
    })

}


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),


)

store.subscribe(() => {
   const state=  store.getState();
   const sortByText = SortByText(state.expenses,state.filters)
   const sortByPrice = SortByPrice(state.expenses,state.filters)
   console.log(sortByText)
   console.log(sortByPrice)
})




const one = store.dispatch(add({ name: "Stefan", surname: "Cvetanovski", price: 500 }))
store.dispatch(add({ name: "Cvetan", surname: "Stefanovski", price: 600 }))
store.dispatch(add({ name: "Mile", surname: "Panika", price: 700 }))
// store.dispatch(remove({ id: one.expense.id }))
store.dispatch(setText("Cvetan"))

const demoState = {
    expenses: [{
        name: "",
        surname: "",
        price: ""
    }],
    filters: {
        text: "",
        price: ""
    }
}