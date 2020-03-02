import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Register(){
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    return(
        <form className='user-register' onSubmit={e =>{
            e.preventDefault();
            axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/register', {newUser, newPassword})
        }}>

        <label htmlFor='new-username'>Username: </label>
        <input type ='text' id='new-username' name='new-username' onChange={e => setNewUser(e.target.value)}></input>

        {/* <label htmlFor='user-email'>Email: </label>
        <input type ='email' id='user-email' name='new-username'></input> */}
        {/* add minLength to password */}
        <label htmlFor='new-password'>Password: </label>
        <input type ='text' id='new-password' name='new-password' onChange={e => setNewPassword(e.target.value)}></input>

        <button type='submit'>Register</button>
    </form>
    )
}