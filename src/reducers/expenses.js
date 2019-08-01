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
                        ...action.updates
                    }
                } else {
                    return expenses;
                }
            })
        }
        default: {
            return state;
        }
    }
}

export default expensesReducer;