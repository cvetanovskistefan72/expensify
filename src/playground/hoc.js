import React from 'react';
import ReactDOM from 'react-dom'


const Info = (props) =>(
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning =(WrappedComponent)=>{
    return (props)=>(
        <div>
            { props.isAdmin && <p>This is private info</p>}
    
            <WrappedComponent {...props}/>
        </div>
    )
}
const require=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuth ? <WrappedComponent {...props}/> : "Pls log in"}
        </div>
    )
}
//requireauthaodasod

const AdminInfo=withAdminWarning(Info)

const AuthInfo =require(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info="Detailer "></AdminInfo>,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={true} info="Details"></AuthInfo>,document.getElementById('app'))