import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { withFormik, Form, Field} from 'formik';
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
            border-radius: 25px;
            border: 1px outset #141414;
            padding: 1%;
            font-size: calc(4px + 2vmin);
            color: white;
        }
    }
`; 
const OtherUsersDiv = styled.div`
    margin: 2%;
    border: 5px outset #81b71a;
    border-radius: 25px;
    background-color: #141414;
    .other-users{
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
    }
`;

const Login = ({touched, errors}) => {
    const [otherUsers, setOtherUsers] = useState(null);

    useEffect(() => {
        axios.get('https://spotify3-buildweek.herokuapp.com/api/users')
            .then(({data}) => setOtherUsers(data));
    }, []);

    return (
        <div>
            <h2>Login to Cue the Music</h2>
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
            <h3 className='reg-title-link'>New User?</h3>
            <div className='register-link'>
                <Link to='/register'>Register Here</Link>         
            </div>
            <OtherUsersDiv>
                <h3>Others Using Suggestify:</h3>
                <div className='other-users'>
                    {otherUsers === null && <div>Loading users...</div>}
                    {otherUsers !== null && otherUsers.map(user => <p key={user.id}>{user.username}</p>)}
                </div>
            </OtherUsersDiv>
        </div>
    );
};

const FormikLogin = withFormik({
    mapPropsToValues({username = '', password = ''}) {
        return {username, password};
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Required Field"),
        password: Yup.string().required("Required Field")

    }),
    handleSubmit: (values, {resetForm, props: {history}}) => {
        console.log('submitting', values);
        axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/login', values)
        .then(({data: {token, id}}) => {
            localStorage.setItem('id', id);
            localStorage.setItem('token', token);
            history.push(`/dashboard`);
        })
        .catch(err => {
            console.log('OOF!', err);
            resetForm();
        })
    }
})(Login);

export default FormikLogin;
