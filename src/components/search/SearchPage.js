import React from 'react';
import { SearchBar } from './SearchBar';


export default function SearchPage(props) {
    /* this should have two states:
        - Something Searched
        - Blank / Nothing Searched */

    /* For the searched state:
        - display all restaurants that match
        - do them by closest match first */

    return (
        <div>
            <div>
                <h1>Search Page</h1>
                <SearchBar/>
            </div>
            <div>
                <div>
                    <h2>Restaurant Name</h2>
                    <p>Type of Cuisine</p>
                    <p>Average Rating</p>
                    <p>Address</p>
                </div>
            </div>
        </div>
    );
}