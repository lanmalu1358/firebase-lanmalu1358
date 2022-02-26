import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {createUser} from '../config/firebase';
import { Button, TextField } from '@material-ui/core';


const CreateUser = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const handleClick =async () => {
        const result = await createUser(email, password)
        console.log("🚀~ file: CreateUser.js ~ line13 ~ handleClick ~ result", result)
        if(result){
            //navigate('/main')
        }else{
            setError("User作成に失敗しました。")
        }
    }
    

    return(
    <div>
        <a>CreateUser.js</a><br/>
        <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
        <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
        <Button variant="outlined" onClick={handleClick}>CREATE</Button><br/>
        <Link to ='/'>戻る</Link>
        {/* <Link to ='/'>Appへ移動</Link>
        <Link to ='/pages/Main'>Mainへ移動</Link>  */}
    </div>
    )
}

export default CreateUser;