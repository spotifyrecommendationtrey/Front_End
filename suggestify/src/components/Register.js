import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { withFormik, Form, Field} from 'formik';
import * as Yup from "yup";

import {axiosWithAuth} from '../utils/axiosWithAuth';

const FormContainer = styled.div`
    margin: 0 auto;
    border: 5px outset #81b71a;
    border-radius: 25px;
    width: 50%;
    background-color: #141414;
    
    Form{
        display: flex;
        flex-direction: column;
        margin: 2%;
        border-radius: 25px;
        label{
            align-self: flex-start;
            font-size: calc(6.5px + 2vmin);
            color: white;
        }
        input{
            margin: 2% 1%;
            width: 75%;
            min-height: 3.5vh;
            border: 3px inset #81b71a;
            font-size: calc(4px + 2vmin);
            padding: 0 2%;
        }
        button{
            margin: 0 auto;
            margin-top: 3%;
            margin-bottom: 3%;
            width: 25%;
            background-color: #81b71a;
            border: 1px outset #141414;
            border-radius: 25px;
            padding: 1%;
            font-size: calc(4px + 2vmin);
            color: white;
        }
    }
`; 

const Register = props => {
    console.log('props', props)
    const {
        values,
        touched,
        errors,
        status,
        history,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
    // Cred is short for CREDENTIALS
    console.log(values, touched, errors, status)
    
    const [userCred, setUserCred] = useState([]);
    useEffect(()=>{
        console.log('New User', status);
        status && setUserCred(userCred =>[...userCred, status])
    }, [status])

    const routeToLogin = props => {
        return props.history.push('/');
    }
    return(
        <div>
            <h2>Register to Begin Exploring</h2>
            <FormContainer>
                <Form>
                    <label htmlFor='username'>Pick a Username: </label>
                    <Field type ='text' id='username' name='username' placeholder='Must be unique' ></Field>
                    {touched.username && errors.username && <p className='error'>{errors.username}</p>}
                    {/* <label htmlFor='user-email'>Email: </label>
                    <input type ='email' id='user-email' name='new-username'></input> */}
                    <label htmlFor='password'>Choose Your Password: </label>
                    <Field type ='password' id='password' name='password' placeholder='Must have at least 8 characters' minLength= '8' />
                    {touched.username && errors.username && <p className='error'>{errors.username}</p>}
                    <button className='submitBtn' type='submit' >Register</button>
                </Form>
            </FormContainer>
            <div className='back-link'>
                    <Link to='/'>Back</Link>
                </div>
        </div>


    )
}


const FormikRegister = withFormik({

    mapPropsToValues({username, password}){
        return {
            username: username || '', 
            password: password || '',
        }
    },
    
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Required Field"),
        password: Yup.string().required("Required Field").min(8)

    }),
    handleSubmit(values, {props, resetForm, setStatus}){
        // console.log('submitting', values)
        axiosWithAuth().post('/api/auth/register', values)
        .then(response=>{
            window.localStorage.setItem('token', response.data.token);
            console.log('RESPONSE', response);
            setStatus(response.data);
            props.history.push('/');

        })
        .catch(err =>{
            console.log('OOF!', err.response);
            resetForm();
        })
    }
})(Register);


export default FormikRegister