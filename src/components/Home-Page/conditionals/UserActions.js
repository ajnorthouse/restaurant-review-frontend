import React, {useState} from 'react';

export function UserActions() {
    return(
        <div>
            <Search />
            <Review />
            <Update />
        </div>
    )
}

function Search(props) {
    return (
        <button>Search Restaurants</button>
    )
}

function Review(props) {
    return (
        <button>Leave a Review</button>
    )
}

function Update(props) {
    return (
        <button>Update a Restaurants' Info</button>
    )
}