import React  from 'react';
import { Link } from 'react-router-dom';
import {ReactSession as Session} from 'react-client-session';

export default function LoginSignUp(props) {
    let view = <></>;

    //this checks the user type to decide what should be displayed.
    switch(Session.get("type")) {
        case "ADMIN":
        case "USER":
            view = <LogoutLink/>;
            break;
        default:
            view = <><LoginLink/><SignUpLink/></>;
            break;
    }

    return(
        <div>
            {view}
        </div>
    )
}

function LoginLink(props) {
    return (<Link to="/login">Login</Link>);
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