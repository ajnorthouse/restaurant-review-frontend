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
                <label htmlFor="title-input">Title:</label>
                <input type="text" id="title-input" name="title-input">
                    {/* This should be props.title */}
                </input>

                <label htmlFor="cuisine-input">Type of Cuisine:</label>
                <input type="text" id="cuisine-input" name="cuisine-input">
                    {/* This should be props.cuisine */}
                </input>

                <label htmlFor="address-input">Address:</label>
                <input type="text" id="address-input" name="address-input">
                    {/* This should be props.address */}
                </input>

                <p>
                    Average Rating:<br/>
                    This will be recalculated after submitting the update.
                </p>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
    
}