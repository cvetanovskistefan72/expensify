import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'
// import { start } from 'repl';
//Add_expense

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt
        }
    })
//Remove_Expense
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id: id

})
//edit expense
const editExpense = (id, amount) => ({
    type: "EDIT_EXPENSE",
    id: id,
    amount: amount
})


//Expences Reduces
const expensesReducerDefaultState = [];


const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE": {
            return [
                ...state, action.expense
            ];
        }
        case "REMOVE_EXPENSE": {
            return state.filter((expenses) => expenses.id !== action.id)

        }
        case "EDIT_EXPENSE": {
            return state.map((expenses) => {
                if (expenses.id === action.id) {
                    return {
                        ...expenses,
                        ...action.amount
                    }
                } else {
                    return state;
                }
            })
        }
        default: {
            return state;
        }
    }
}

//setTextFilter 

const setTextFilter = (text = "") => ({
    type: "SET_TEXT",
    text: text
})
//sort
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
    amountSort: "amount"
})
const sortByDate = () => ({
    type: "SORT_BY_DATE",
    dateSort: "date"
})

//setDate

const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
    startDate: startDate
})
const setEndDate = (endDate = undefined) => ({
    type: "SET_END_DATE",
    endDate: endDate
})

//Filter Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT": {
            return {
                ...state,
                text: action.text
            }
        }
        case "SORT_BY_AMOUNT": {
            return {
                ...state,
                sortBy: action.amountSort
            }
        }
        case "SORT_BY_DATE": {
            return {
                ...state,
                sortBy: action.dateSort
            }
        }
        case "SET_START_DATE": {
            return {
                ...state,
                startDate: action.startDate
            }
        }
        case "SET_END_DATE": {
            return {
                ...state,
                endDate: action.endDate
            }
        }
        default: {
            return state
        }
    }
}
//Get visable expences

const getVisableExpenses = (expenses, {text,sortBy,startDate,endDate}) => {

    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !=='number'|| expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !=='number'|| expense.createdAt <= endDate;
        const textMatch=  expense.description.toLowerCase().includes(text.toLowerCase())
      

        return startDateMatch&&endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 :-1;
        }
        if(sortBy==='amount'){
            return a.amount<b.amount ? 1:-1;
        }
    })
}

//Store creatuon 

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),

)

store.subscribe(() => {
    const state = store.getState();
    const visableExpenses = getVisableExpenses(state.expenses, state.filters)
    console.log(visableExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 ,createdAt:-21111}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300,createdAt:-1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}))

// store.dispatch(setTextFilter("Rent"))

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0))
// // store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())




const demoState = {
    expenses: [{
        id: 'abcdefg',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',//date or amount
        startDate: undefined,
        endDate: undefined
    }
}

