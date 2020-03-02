import React, {useState, useEffect} from 'react'
import {Route, Link} from 'react-router-dom'
import axios from 'axios'

import Login from './Login'
import Register from './Register'

const UserLog = () => {
    const [user, setUser] = useState()
    // useEffect(()=>{
    //     axios.get('https://spotify3-buildweek.herokuapp.com/api/users')
    //     .then(response=>{
    //         console.log(response);
    //     })
    //     .catch(error=>{
    //         console.log('OOF!', error);
    //     })
    // }, [])
    return(
        <div className='log-form-page'>
        <Route exact path='/'>
            <h2>Login</h2>
            <Login />
            <h3 className='reg-title-link'>New User?</h3>
            <Link to='/register'>Register</Link>
        </Route>
        <Route path='/register'>
            <h2>Registration</h2>
            <Register />
        </Route>

        </div>
    );

}

export default UserLog;