import React from 'react';
import { Link } from 'react-router-dom';

export default function UserActions() {
    return(
        <div>
            <SearchLink />
            <ReviewLink />
            <UpdateLink />
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