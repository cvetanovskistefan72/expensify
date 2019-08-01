import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const now =moment()
class ExpenseForm extends React.Component {
constructor(props){
super(props)
this.state = {
    description: props.expenses ? props.expenses.description :'',
    note:props.expenses ? props.expenses.note :'',
    amount:props.expenses ? props.expenses.amount :'',
    createdAt:props.expenses ? moment(props.expenses.createdAt) : moment(),
    calendarFocused:false,
    error:""

}
}

    
    onDescriptionChange =(e)=>{
        const description =e.target.value;
        this.setState(()=>({description:description}))
     
    }
    onNoteChange =(e)=>{
        const note =e.target.value;
        this.setState(()=>({
            note:note
        }))
        
    }
    onAmountChange=(e)=>{
        const amount =e.target.value;
        
            this.setState(()=>({
                amount:amount
            }))
         
        console.log(this.state.amount)
    }
    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({
                createdAt:createdAt
            }))
        }
    }
    onFocusChange=({focused})=>{
            this.setState(()=>({
                calendarFocused:focused
            }))
    }
    onSubmit=(e)=>{
            e.preventDefault();
            if(!this.state.description||!this.state.amount){
               this.setState(()=>({
                   error:"PLease provide description and amount"
               }))
            }else{
                this.setState(()=>({
                    error:""
                }))
                this.props.onSubmit({
                    description:this.state.description,
                    amount:parseInt(this.state.amount),
                    createdAt:this.state.createdAt.valueOf(),
                    note:this.state.note

                })
            }

    }
    render() {
        return (
            <div>
            {this.state.error &&<p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus={true}
                        value={this.state.description}
                        onChange={this.onDescriptionChange} />

                            <input
                                type="text"
                                placeholder="Amount"
                                value={this.state.amount}
                                onChange={this.onAmountChange} />
                                
                            <br></br>
                            <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={()=> false}

                            />
                            <textarea
                                placeholder="Add note"
                                value={this.state.note}
                                onChange={this.onNoteChange}
                                >
                               

                            </textarea>
                            <button>Add Expense</button>
                 </form>
   
            </div>
                )
            }
        }
        
export default ExpenseForm;