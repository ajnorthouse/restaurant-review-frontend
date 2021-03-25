import React, {useState} from 'react';

export function LoginSignUp(props) {
    return (
        <div>
            <Login />
            <Logout />
            <SignUP />
        </div>
    )
}

function Logout(props) {
    return (
        <button>Logout</button>
    )
}

function Login(props) {
    return (
        <button>Login</button>
    )
}

function SignUP(props) {
    return (
        <button>Sign Up</button>
    )
}