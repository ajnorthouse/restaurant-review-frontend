import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginSignUp(props) {
    return (
        <div>
            <LoginLink />
            <LogoutLink />
            <SignUpLink />
        </div>
    )
}

function LoginLink(props) {
    return (
        <Link to="/login">Login</Link>
    )
}

function LogoutLink(props) {
    return (
        <Link to="/logout">Logout</Link>
    )
}

function SignUpLink(props) {
    return (
        <Link to="/signup">Sign Up</Link>
    )
}