import React from 'react';
import UserActions from './conditionals/UserActions';
import LoginSignUp from './conditionals/LoginSignUp';

export default function NavBar(props) {


    return (
        <nav>
            <UserActions />
            <LoginSignUp />
        </nav>
    );
}