import React, {useState, useEffect} from 'react'
import {Route, Link} from 'react-router-dom'
import axios from 'axios'

const UserLog = () => {
    // const [user, setUser] = useState()
    // useEffect(()=>{
    //     axios.get('https://spotify3-buildweek.herokuapp.com/api/users')
    //     .then(response=>{
    //         console.log(response);
    //     })
    // }, [])
    return(
        <div className='log-form-page'>
        <h2>Login</h2>
        <form className='user-login'>
            <label htmlFor='username'>Username: </label>
            <input type='text' id='username' name ='username' minLength='8' placeholder='Must be more than 8 characters'></input>
            <label htmlFor='password'>Password: </label>
            <input type='password' id ='password' name='password'></input>
            <button type='submit'>Login</button>
        </form>
        <h2>Registration</h2>
        <form className='user-register'>
            <label htmlFor='new-username'>Username: </label>
            <input type ='text' id='new-username' name='new-username'></input>
            {/* <label htmlFor='user-email'>Email: </label>
            <input type ='email' id='user-email' name='new-username'></input> */}
            <label htmlFor='user-email'>Password: </label>
            <input type ='text' id='new-username' name='new-username'></input>
            <button type='submit'>Register</button>
        </form>
        </div>
    );

}

export default UserLog;