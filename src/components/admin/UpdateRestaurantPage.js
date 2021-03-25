import React from 'react';

export default function UpdateRestaurantPage(props) {
    /* Should probably work by having the webpage send the id of the Restaurant as a variable. */

    /* Needs a form that accepts:
        - Title
        - Type of Cuisine
        - Address
        
        - Average Rating should be updated when a new review is added, associated with the restaurant.

        - [hidden] Restaurant ID */

    return (
        <div>
            <form>
                {/* <label htmlFor="">Title:</label>
                <input>Title</input>
                
                <label>Type of Cuisine:</label>
                <input>Type of Cuisine</input>
                
                <label>Address:</label>
                <input>Address</input> */}

                <p>Average rating will be auto updated by db</p>

                <button>Submit</button>
            </form>
        </div>
    );
    
}