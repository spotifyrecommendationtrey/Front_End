import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withFormik, Form, Field} from 'formik';
import * as Yup from "yup";

const FormContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 2%;
    border: 5px solid;
    width: 50%;
    Form{
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

const Register = ({touched, errors, status}) => {
    // Cred is short for CREDENTIALS
    const [userCred, setUserCred] = useState({
        id: Date.now(),
        username: '',
        password: ''
    });
    useEffect(()=>{
        console.log('New User', status);
        status && setUserCred(user =>[...user, status])
    }, [status])


    return(
        <FormContainer>
            <Form className='user-register'>

                <label htmlFor='new-username'>Pick a Username: </label>
                <Field type ='text' id='new-username' name='username' placeholder='Must be unique' ></Field>
                {touched.username && errors.username && <p className='error'>{errors.username}</p>}
                {/* <label htmlFor='user-email'>Email: </label>
                <input type ='email' id='user-email' name='new-username'></input> */}
                {/* add minLength to password */}
                <label htmlFor='new-password'>Choose Your Password: </label>
                <Field type ='password' id='new-password' name='password' placeholder='Must have at least 8 characters' minLength= '8'></Field>
                {touched.username && errors.username && <p className='error'>{errors.username}</p>}

                <button type='submit'>Register</button>
            </Form>
        </FormContainer>

    )
}

const FormikRegister = withFormik({

    mapPropsToValues({username, password}){
        return {
            username: username || '', 
            password: password || ''
        }
    },
    
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Required Field"),
        password: Yup.number().moreThan(8)

    }),
    handleSubmit: (values, {resetForm})=>{
        console.log('submitting', values)
        axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/register', values)
        .then(response=>{
            console.log(response);
        })
        .catch(err =>{
            console.log('OOF!', err);
            resetForm();
        })
    }
})(Register);


export default FormikRegister