import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { createDataInFirebase, readData, updateData, deleteData, registerData, addData } from '../config/firebase'
import Button from '@material-ui/core/Button'
import { TextField } from '@mui/material';

const Main = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [born, setBorn] = useState('')

    const createFunc = async () => {
        console.log('start')
        const res =await createDataInFirebase()
        console.log('fin', res)
    }

    const read = async () => {
        console.log("read")
        await readData()
    }

    const handleUpdate = async () => {
        await updateData();
    }

    const handleDelete = async () => {
        await deleteData();
    }


    const handleData = async () => {
        console.log("add")
        await addData(first,last,born)
    }




    return(
    <div>
    <h1>Main.js</h1><br/>

    <TextField id="outlined-basic" label="first" variant="outlined"onChange={e => setFirst(e.target.value)} />
    <TextField id="outlined-basic" label="last" variant="outlined" onChange={e => setLast(e.target.value)}/>
    <TextField id="outlined-basic" label="born" variant="outlined" onChange={e => setBorn(e.target.value)}/><br/>
    <Button variant="outlined" onClick={handleData}>My Data Create</Button>
    <Button variant="outlined" onClick={createFunc}>DBへ保存</Button>
    <Button variant="outlined" onClick={read}>DB読み取り</Button>
    <Button variant="outlined" onClick={handleUpdate}>Update</Button>
    <Button variant="outlined" onClick={handleDelete}>Delete</Button><br/><br/>

    <Link to = '/'>Loginへ移動</Link><br/>
    <Link to ='/pages/CreateUser'>CreateUserへ移動</Link>
    </div>
    )
}

export default Main;