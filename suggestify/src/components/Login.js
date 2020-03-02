import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Login(){
    const [user, setUser] = useState({
        // id: ,
        username: '',
        password: ''
    });
    const onInputChange = event =>{
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
        console.log(user);
    }
    const onSubmit = e =>{
        e.preventDefault();
        // axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/register', user);
    }

    return(
        <div className='login-form'>
                <form className='user-login'>
                <label htmlFor='username'>Username: </label>
                <input type='text' id='username' name ='username'></input>
                <label htmlFor='password'>Password: </label>
                <input type='password' id ='password' name='password'></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}