import React from 'react'
// import App from './App'
// import Main from './Main'
// import CreateUser from './CreateUser'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'

const Login = () => {
    return(
    <div>
        <a>Login.js</a><br/>
        {/* <Link to ='/'>Appへ移動</Link> */}
        <Link to ='/pages/Main'>Mainへ移動</Link><br/>

        <TextField id="standard-basic" label="email" variant="standard" /><br/>
        <TextField id="standard-basic" label="password" variant="standard" /><br/>
        <Button id="outlined-basic">LOGIN</Button><br/>
        <Link to ='/pages/CreateUser'>アカウントを作成</Link><br/>
    </div>
    )
}

export default Login;