import React, {useState, useEffect} from 'react'

export default function Register(){
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    return(
        <form className='user-register'>

        <label htmlFor='new-username'>Username: </label>
        <input type ='text' id='new-username' name='new-username'></input>

        {/* <label htmlFor='user-email'>Email: </label>
        <input type ='email' id='user-email' name='new-username'></input> */}
        {/* add minLength to password */}
        <label htmlFor='new-password'>Password: </label>
        <input type ='text' id='new-password' name='new-password'></input>

        <button type='submit'>Register</button>
    </form>
    )
}