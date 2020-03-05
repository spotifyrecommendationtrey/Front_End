import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {withFormik, Form, Field} from 'formik';
import * as Yup from "yup";

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

const Register = ({touched, errors}) => {
    return(
        <div>
            <h2>Register to Begin Exploring</h2>
            <FormContainer>
                <Form>
                    <label htmlFor='username'>Pick a Username: </label>
                    <Field type='text' id='username' name='username' placeholder='Must be unique' />
                    {touched.username && errors.username && <p className='error'>{errors.username}</p>}
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
    );
};

const FormikRegister = withFormik({
    mapPropsToValues({username = '', password = ''}){
        return {username, password};
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Required Field"),
        password: Yup.string().required("Required Field").min(8)
    }),
    handleSubmit(values, {resetForm, props: {history}}) {
        // console.log('submitting', values)
        axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/register', values)
        .then(() => {
            history.push('/');
        })
        .catch(err =>{
            console.log('OOF!', err.response);
            resetForm();
        })
    }
})(Register);

export default FormikRegister;