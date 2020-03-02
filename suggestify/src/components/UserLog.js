import React, {useState, useEffect} from 'react'
import {Route, Link} from 'react-router-dom'
import axios from 'axios'

import Register from './Register'

const UserLog = () => {
    const [user, setUser] = useState()
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
            <input type='text' id='username' name ='username'></input>
            <label htmlFor='password'>Password: </label>
            <input type='password' id ='password' name='password'></input>
            <button type='submit'>Login</button>
        </form>
        <h2>Registration</h2>
            <Register />
        </div>
    );

}

export default UserLog;