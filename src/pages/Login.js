import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login} from '../config/firebase';
import { Button, TextField } from '@material-ui/core'
import {firebaseLogin} from '../config/firebase'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();



    


    const handleClick =async () => {
            const result = await login(email, password)
        console.log("🚀~ file: Login.js ~ line13 ~ handleClick ~ result", result)
        if(result){
            navigate('/pages/main')
        }else{
            setError("Loginに失敗しました。")
        }
    }

    const Handleclick =async () => {
        const result = await firebaseLogin(email, password)
    console.log("🚀~ file: Login.js ~ line13 ~ handleClick ~ result", result)
    if(result){
        navigate('https://mail.google.com/')
    }else{
        setError("googleLoginに失敗しました。")
    }
}

    return(
    <div>
        <h1>Login.js</h1><br/>
        <Link to ='/pages/main'>Mainへ移動</Link><br/>
        <TextField id="standard-basic" label="email" variant="standard" value={email} onChange={e => setEmail(e.target.value)} /><br/>
        <TextField id="standard-basic" label="password" variant="standard" value={password} onChange={e => setPassword(e.target.value)} /><br/>
        <Button id="outlined-basic" onClick={handleClick}>LOGIN</Button><br/>
        <Link to ='/pages/CreateUser'>アカウントを作成</Link><br/>
        <Button id="outlined-basic" onClick={Handleclick}>Google LOGIN</Button><br/>
    </div>
    )
}

export default Login;