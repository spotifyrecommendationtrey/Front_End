import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LogOut = styled.div`
    margin: 2% 10% 0 0;
    text-align: right;
    a {
        border: 1px outset #141414;
        border-radius: 25px;
        background-color: #81b71a;
        padding: .8%;
        text-shadow: 0 0 10px #141414;
    }
    
`;

const ProfileContainer = styled.div`
    margin: 0 auto;
    border: 5px outset #81b71a;
    border-radius: 25px;
    width: 50%;
    background-color: #141414;
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
        <div>
            <LogOut>
                <Link to='/'>Log Out</Link>
            </LogOut>
            <ProfileContainer className='profile'>
                <h2>User Profile</h2>
                <p>Content Coming Soon</p>
            </ProfileContainer>
            <OtherUsersDiv>
                <h3>Others Using Suggestify:</h3>
                <div className='other-users'>
                    {setTimeout(()=>{
                        return <div>Fetching users...</div>;
                    }, 5000)}
                    {users.map(user=>{
                    return <p key={user.id}>{user.username}</p>;
                    })}
                </div>

            </OtherUsersDiv>
        </div>

        
    )
}