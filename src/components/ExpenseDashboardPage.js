import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import ExpenseList from './expenseList'
import ExpenseListFilters from './ExpenseListFilters'
const ExpenseDashboardPage=()=>(
    <div>
    <ExpenseListFilters />
    <ExpenseList />
    </div>
)
export default ExpenseDashboardPage;