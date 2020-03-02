import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Register(){
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const onSubmit = e =>{
        e.preventDefault();
        axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/register', {newUser, newPassword})
    }
    const onUserChange = e =>{
        setNewUser(e.target.value);
    }
    const onPasswardChange = e =>{
        ;setNewPassword(e.target.value)
    }
    return(
        <form className='user-register' onSubmit={onSubmit}>

        <label htmlFor='new-username'>Username: </label>
        <input type ='text' id='new-username' name='new-username' onChange={onUserChange}></input>

        {/* <label htmlFor='user-email'>Email: </label>
        <input type ='email' id='user-email' name='new-username'></input> */}
        {/* add minLength to password */}
        <label htmlFor='new-password'>Password: </label>
        <input type ='text' id='new-password' name='new-password' onChange={onPasswardChange}></input>

        <button type='submit'>Register</button>
    </form>
    )
}