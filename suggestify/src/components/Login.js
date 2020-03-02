import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import * as Yup from 'yup';

const FormContainer = styled.div`
    margin: 0 auto;
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
            font-size: calc(4px + 2vmin);
            padding: 0 2%;
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
        fieldValidation()
        axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/register', user);
    }

    return(
        <FormContainer>
                <form className='user-login'>
                <label htmlFor='username'>Username: </label>
                <input type='text' id='username' name ='username'></input>
                <label htmlFor='password'>Password: </label>
                <input type='password' id ='password' name='password'></input>
                <button type='submit'>Login</button>
            </form>
        </FormContainer>
    )
}

const fieldValidation= ()=>{
    validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")

})}