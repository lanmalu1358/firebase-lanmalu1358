import React from 'react'
// import App from './App'
// import Login from './Login'
// import CreateUser from './CreateUser'
import {Link} from 'react-router-dom'

const Main = () => {
    return(
    <div>
    <a>Main.js</a>
    {/* <Link to ='/'>Appへ移動</Link> */}
    <Link to = '/'>Loginへ移動</Link>
    <Link to ='/pages/CreateUser'>CreateUserへ移動</Link>
    </div>
    )
}

export default Main;