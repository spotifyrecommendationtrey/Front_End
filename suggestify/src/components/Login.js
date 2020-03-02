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

const Login = ({})=>{
    const [user, setUser] = useState({
        // id: ,
        username: '',
        password: ''
    });
    // useEffect(()=>{
    //     console.log('User', status);
    //     status && setUser(user =>[...user, status])
    // }, [status])
    
    // const onInputChange = event =>{
    //     setUser({
    //         ...user,
    //         [event.target.name]: event.target.value,
    //     });
    //     console.log(user);
    // }
    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = e =>{
    //     console.log(e)
    //     e.preventDefault();
    //     axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/register', user);
    // }

    // console.log(watch('example'))

    return(
        <FormContainer>
            <Form>
                <label htmlFor='username'>Username: </label>
                <Field type='text' id='username' name ='username' />
                {/* {touched.name && errors.name && <p className='error'>{errors.username}</p>} */}
                <label htmlFor='password'>Password: </label>
                <Field type='password' id ='password' name='password' />
                {/* {touched.name && errors.name && <p className='error'>{errors.password}</p>} */}
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
    
    // validationSchema: Yup.object().shape({
    //     usernamename: Yup.string().required("Required Field"),
    //     password: Yup.string().required("Required Field")

    // }),
    // handleSubmit(values, {setStatus}){
    //     console.log("surrendering", values)
    //     axios.post('https://spotify3-buildweek.herokuapp.com/api/auth/login', values)
    //     .then(response => {
    //         console.log('Goooood, goooood', response)
    //         setStatus(response.data)
            
    //     })
    //     .catch(error => {
    //         console.log(error.response)
    //     })
    // }
})(Login);


export default FormikLogin