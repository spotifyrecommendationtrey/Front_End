import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';

import Login from './Login'
import Register from './Register'

const LogContainer = styled.div`
    h2{
        margin: 2%;
        font-size: calc(10px + 2vmin);
    }
`;


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
        <LogContainer>
        <Switch>
            <Route path='/register'>
                <h2>Register for Suggestify</h2>
                <Register />
                <Link to='/'>Back</Link>
            </Route>
            <Route exact path='/'>
                <h2>Login for the Vibes</h2>
                <Login />
                <h3 className='reg-title-link'>New User?</h3>
                <Link to='/register'>Register Here</Link>
            </Route>
        </Switch>



        </LogContainer>
    );

}

export default UserLog;