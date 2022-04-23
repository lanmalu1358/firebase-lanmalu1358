import React from 'react'
import {Link} from 'react-router-dom'
import {UseHistory} from "react-router-dom"
import { createDataInFirebase } from '../config/firebase'
import Button from '@material-ui/core/Button'

const Main = () => {
    const createFunc = async () => {
        console.log('start')
        const res =await createDataInFirebase()
        console.log('fin', res)
    }
    return(
    <div>
    <h1>Main.js</h1><br/>

    <Button onClick={createFunc}>DBへ保存</Button><br/>

    <Link to = '/'>Loginへ移動</Link><br/>
    <Link to ='/pages/CreateUser'>CreateUserへ移動</Link>
    </div>
    )
}

export default Main;