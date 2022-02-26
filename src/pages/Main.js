import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
    return(
    <div>
    <h1>Main.js</h1><br/>
    <Link to = '/'>Loginへ移動</Link><br/>
    <Link to ='/pages/CreateUser'>CreateUserへ移動</Link>
    </div>
    )
}

export default Main;