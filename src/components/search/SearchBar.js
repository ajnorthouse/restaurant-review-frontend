import React from 'react';

export function SearchBar(props) {
    return(
        <form action="/search" method="get">
            <label htmlFor="search-bar">
                Search for Restaurants
            </label>
            <input
                type="text"
                id="search-bar"
                placeholder="Ex: McDonald's, Wendy's, etc."
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );
}