import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProfileContainer = styled.div`
    margin: 0 auto;
    border: 5px outset #81b71a;
    border-radius: 25px;
    width: 50%;
    background-color: #141414;
`;

export default function UserProfile(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://spotify3-buildweek.herokuapp.com/api/users')
        .then(response=>{
            setUsers(response.data)
        })
    }, [])
    console.log(users)
    return(
        <div className='profile'>
            <h2>Content Coming Soon</h2>
            <div className='other-users'>
                <h3>Others Using Suggestify:</h3>
                {users.map(user=>{
                    return <p>{user.username}</p>;
                })}
            </div>
        </div>
    )
}