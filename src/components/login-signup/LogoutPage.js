import React from 'react';
import {Redirect} from 'react-router-dom';
import {ReactSession as Session} from 'react-client-session';

export default function LogoutPage(props){
    //clears session variables
    Session.set("username", "");
    Session.set("name", "");
    Session.set("type", "");
    Session.set("password", "");
    Session.set("id", -1);

    //redirects back to the home page
    return (<Redirect to="/"/>);
}