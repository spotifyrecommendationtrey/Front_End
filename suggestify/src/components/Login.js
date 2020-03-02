import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { withFormik, Form, Field} from 'formik';
import * as Yup from "yup";


const FormContainer = styled.div`
    margin: 0 auto;
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

const Login = ({touched, errors, status})=>{

    const [users, setUsers] = useState({
        // id: ,
        username: '',
        password: ''
    });
    useEffect(()=>{
        console.log('User', status);
        status && setUsers(users =>[...users, status])
    }, [status])
    

    return(
        <FormContainer>
            <Form>
                <label htmlFor='username'>Username: </label>
                <Field type='text' id='username' name ='username' />
                {touched.username && errors.username && <p className='error'>{errors.username}</p>}
                <label htmlFor='password'>Password: </label>
                <Field type='password' id ='password' name='password' />
                {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                <button type='submit'>Login</button>
            </Form>
        </FormContainer>
    )
}
const FormikLogin = withFormik({

    mapPropsToValues({username, password}){
        return {
            username: username || '', 
            password: password || ''
        }
    },
    
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Required Field"),
        password: Yup.string().required("Required Field")

    }),
    handleSubmit: (values, {resetForm})=>{
        console.log('submitting', values)
        axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/login', values)
        .then(response=>{
            console.log(response);
        })
        .catch(err =>{
            console.log('OOF!', err);
            resetForm();
        })
    }
})(Login);


export default FormikLogin