import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './style/style.scss';
import {Provider} from 'react-redux'
import  AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actons/expenses'
import {setTextFilter} from './actons/filters'
import getVisableExpenses from './selectors/expenses'



const store =configureStore();


console.log("test")

 


const jsx =(
<Provider store = {store}>
    <AppRouter />
</Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));

