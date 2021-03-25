import React from 'react';
import { LoginSignUp } from './conditionals/LoginSignUp';
import { UserActions } from './conditionals/UserActions';

export default function NavBar(props) {


    return (
        <nav>
            <UserActions />
            <LoginSignUp />
        </nav>
    );
}