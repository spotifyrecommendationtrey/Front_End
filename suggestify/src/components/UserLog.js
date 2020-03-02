import React, {useState, useEffect} from 'react'
import {Route, Link} from 'react-router-dom'
import axios from 'axios'

const UserLog = () => {
    return(
        <div className='log-form-page'>
        <form className='user-login'>
            <label>Username: </label>
            <input type='text' name ='username'></input>
            <label>Password: </label>
            <input type='password'></input>
            <button type='submit'>Login</button>
        </form>
        </div>
    );

}

export default UserLog;