import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
 import ReactDOM from 'react-dom'

 
const NotFoundPage=()=>(
    <div>
    404! - <Link to="/">Go home</Link>
    </div>
)
export default NotFoundPage;