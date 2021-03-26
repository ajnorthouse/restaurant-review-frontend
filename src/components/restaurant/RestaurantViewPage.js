import React from 'react';
import useLocalStorage from 'react-use-localstorage';

export default function RestaurantViewPage(props) {
    /* Should probably work by having the webpage send the id of the Restaurant as a variable. */

    /* Needs to display:
        - Address
        - Title
        - Average Rating
        - Type of Cuisine */

    return (
        <div>
            <h1>Restaurant Name</h1>
            <p>Type of Cuisine</p>
            <p>Average Rating</p>
            <p>Address</p>
            <ul>
                <h2>Reviews:</h2>
                <li>Review</li>
                <li>Review</li>
                <li>Review</li>
            </ul>
        </div>
    );
    
}