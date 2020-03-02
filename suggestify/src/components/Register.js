import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 2%;
    border: 5px solid;
    width: 50%;
    form{
        display: flex;
        flex-direction: column;
        margin: 2%;
        label{
            align-self: flex-start;
            font-size: calc(6.5px + 2vmin);
        }
        input{
            margin: 2% 1%;
            width: 75%;
            min-height: 3.5vh;
            border: 1px inset black;
        }
        button{
            margin: 0 auto;
            margin-top: 3%;
            margin-bottom: 3%;
            width: 25%;
            font-size: calc(4px + 2vmin);
        }
    }
`; 

export default function Register(){
    // Cred is short for CREDENTIALS
    const [userCred, setUserCred] = useState({
        id: Date.now(),
        username: '',
        password: ''
    });
    const onInputChange = event =>{
        setUserCred({
            ...userCred,
            [event.target.name]: event.target.value,
        });
        console.log(userCred);
    }
    const onSubmit = e =>{
        e.preventDefault();
        axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/register', userCred);
    }

    return(
        <FormContainer>
            <form className='user-register'>

                <label htmlFor='new-username'>Pick a Username: </label>
                <input type ='text' id='new-username' name='username' placeholder='Must be unique' onChange={onInputChange}></input>

                {/* <label htmlFor='user-email'>Email: </label>
                <input type ='email' id='user-email' name='new-username'></input> */}
                {/* add minLength to password */}
                <label htmlFor='new-password'>Choose Your Password: </label>
                <input type ='text' id='new-password' name='password' placeholder='Must have at least 8 characters' minLength= '8' onChange={onInputChange}></input>

                <button type='submit' onSubmit={onSubmit}>Register</button>
            </form>
        </FormContainer>

    )
}