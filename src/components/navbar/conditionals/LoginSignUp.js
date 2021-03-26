import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

export default function LoginSignUp(props) {
    const [login, setLogin] = useLocalStorage('login', [{
        username: '',
        name: '',
        id: -1,
        type: ''
    }]);

    let view;

    //this checks the user type to decide what should be displayed.
    switch(login.id) {
        case -1:
            view = <><LogoutLink /></>;
            break;
        default:
            view = <><LoginLink /><SignUpLink /></>;
    }

    return(
        <div>
            {view}
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