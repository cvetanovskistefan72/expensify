import React from 'react';
import ExpenseForm from '../components/ExpenseForm'
import {connect} from 'react-redux'
import {editExpense} from '../actons/expenses'
 

 
const EditExpensePage=(props)=>(
    <div>

    <ExpenseForm 
    expenses={props.expenses}
    onSubmit={(expenses)=>{
        props.dispatch(editExpense(props.match.params.id,expenses))
      
        props.history.push("/")
    }}

    />
    </div>
)

const mapStateToProps=(state,props)=>{
    return{
        expenses:state.expenses.find((expense)=>{
            if(expense.id===props.match.params.id){
                return true;
            }
        })
    }
}
export default connect(mapStateToProps)(EditExpensePage)