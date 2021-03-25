import React from 'react';

export default function LeaveReviewPage(props) {
    /* Should probably work by having the webpage send the id of the Restaurant as a variable. */

    /* Needs a form that accepts:
        - Rating (out of 5)
        - description
        - [hidden] User ID
        - [hidden] Restaurant ID */

    return (
        <div>
            <form>
                <lable>Rating:</lable>
                <input>Rating</input>
                
                <lable>Description:</lable>
                <input>Description</input>
                
                <button>Submit</button>
            </form>
        </div>
    );
}