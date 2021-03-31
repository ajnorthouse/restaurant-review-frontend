import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSession as Session } from 'react-client-session';

export default function UserActions(props) {
    let view = <></>;
    console.log(1);

    //this checks the user type to decide what should be displayed.
    switch(Session.get("type")) {
        case 'USER':
            view = <><SearchLink/><ReviewLink/></>;
            break;
        case 'ADMIN':
            view = <><SearchLink/><UpdateLink/></>;
            break;
        default:
            view = <><SearchLink/></>;
            break;
    }

    return(
        <div>
            {view}
        </div>
    )
}

function SearchLink(props) {
    return (
        <Link to="/search">Search Restaurants</Link>
    )
}

function ReviewLink(props) {
    return (
        <Link to="/review">Leave a Review</Link>
    )
}

function UpdateLink(props) {
    return (
        <Link to="/update-restaurant">Update a Restaurants' Info</Link>
    )
}