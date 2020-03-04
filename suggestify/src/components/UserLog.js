import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import styled from 'styled-components';

import Login from './Login'
import Register from './Register'
import UserProfile from './UserProfile'

const LogContainer = styled.div`
    h2, h3{
        margin: 3% 1% 2% 1%;;
        font-size: calc(10px + 2vmin);
        color: white;
        text-shadow: 0 0 10px #81b71a;
    }
    p{
        margin: 3% 1% 2% 1%;;
        font-size: calc(8px + 2vmin);
        color: white;
        text-shadow: 0 0 10px #81b71a;
    }

    a{
        text-decoration: none;
        color: white;
        text-shadow: 0 0 10px #81b71a;
        font-size: calc(4px + 2vmin)
    }
    .back-link{
        margin: 2%;
    }

`;


const UserLog = ({history}) => {
    return(
        <LogContainer>
        <Switch>
            <Route path='/profile'>
                <UserProfile />
            </Route>
            <Route path='/register'>
                <h2>Register to Begin Exploring</h2>
                <Register />
                <div className='back-link'>
                    <Link to='/'>Back</Link>
                </div>
            </Route>
            <Route exact path='/'>
                <h2>Login to Cue the Music</h2>
                <Login history={history} />
                <h3 className='reg-title-link'>New User?</h3>
                <div className='register-link'>
                    <Link to='/register'>Register Here</Link>         
                </div>
            </Route>
        </Switch>



        </LogContainer>
    );

}

export default UserLog;