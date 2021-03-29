import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom";
import RestaurantMiniView from '../restaurant/RestaurantMiniView';
import SearchBar from './SearchBar';

export default function SearchPage(props) {
    const search = useLocation().search;
    const query = new URLSearchParams(search).get('s');

    var searchResults = (query===null || query==='') ? 
        <span></span> :
        <div><CreateMiniRestaurants query={query}/></div> ;

    return (
        <div>
            <div>
                <h1>Search Page</h1>
                <SearchBar/>
            </div>
            {searchResults}
        </div>
    );
}


async function callAPI(searchString, setError, setItems) {
    try {
        console.log(searchString);
        const res = await fetch("http://swapi.dev/api/people/1");
        if (!res.ok) {
            throw Error(res.statusText);
        }
        const json = await res.json();
        setError(json.name);
    } catch (err) {
        console.log(err);
        setError(err.message);
    }
}


function CreateMiniRestaurants() {
    //collects JSON response and converts into JSON object
    let jsonString = '[{"name":"asdf", "cuisine":"asdf", "address":"asdf", "average_rating":"asdf"},{"name":"fdsa", "cuisine":"fdsa", "address":"fdsa", "average_rating":"fdsa"}]';
    let json = JSON.parse(jsonString);

    //creates empty var for collection html elements
    let miniRestaurants;

    //loops through the json object to create html elements
    json.forEach((item) => {
        miniRestaurants = <>
            <div>
                <RestaurantMiniView
                    title={item.name}
                    cuisine={item.cuisine}
                    address={item.address}
                    avg_rating={item.average_rating}/>
            </div> {miniRestaurants}</>;
    });

    //returns the full set of elements
    return miniRestaurants;
}