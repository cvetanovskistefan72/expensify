// export a stateless functional component 
//description, amount,createdAt
import React from 'react';
import {connect} from 'react-redux'
import {removeExpense} from  '../actons/expenses';
import {Link } from 'react-router-dom'


const ExpenseListItem =({dispatch,id,description,amount,createdAt})=>(
    <div>
    <Link to={`/edit/${id}`}><h2>{description}</h2></Link>
    <p>{amount}$-{createdAt}</p>
    <button onClick={(e)=>{
        e.preventDefault();
       dispatch(removeExpense({id:id}))
    }}>Remove</button>

    </div>
)
 
 

export default connect( )(ExpenseListItem);






