import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Register(){
    // Cred is short for CREDENTIALS
    const [userCred, setUserCred] = useState({
        username: '',
        password: ''
    });
    const onInputChange = e =>{
        setUserCred({
            ...userCred,
            [e.target.name]: event.target.value,
        });
    }
    const onSubmit = e =>{
        e.preventDefault();
        axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/register', {username, password});
    }

    return(
        <form className='user-register'>

        <label htmlFor='new-username'>Username: </label>
        <input type ='text' id='new-username' name='username' onChange={onInputChange}></input>

        {/* <label htmlFor='user-email'>Email: </label>
        <input type ='email' id='user-email' name='new-username'></input> */}
        {/* add minLength to password */}
        <label htmlFor='new-password'>Password: </label>
        <input type ='text' id='new-password' name='password' onChange={onInputChange}></input>

        <button type='submit' onSubmit={onSubmit}>Register</button>
    </form>
    )
}