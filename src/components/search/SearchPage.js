import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom";
import RestaurantMiniView from '../restaurant/RestaurantMiniView';
import { useFetch } from '../../helpers/AxiosExample';
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


function CreateMiniRestaurants(query) {
    //calls axios method to search for restaurants
    let response = useFetch('getById', 1);

    //this handles the return for the async call
    if (response.loading === false) {
        let JSON = (response.data.count !== undefined) ? 
            response.data.results:
            [response.data];
        console.log(JSON);

        //creates empty var for collection html elements
        let miniRestaurants = <></>;

        //loops through the json object to create html elements
        // json.forEach((item) => {
        //     miniRestaurants = <>
        //         <div>
        //             <RestaurantMiniView
        //                 title={item.name}
        //                 cuisine={item.cuisine}
        //                 address={item.address}
        //                 avg_rating={item.average_rating}/>
        //         </div> {miniRestaurants}</>;
        // });
        //loops through the json object to create html elements
        for (var x = 0; x < JSON.length; x++) {
            miniRestaurants = <>
                <div>
                    <RestaurantMiniView
                    title={JSON[x].name}
                    cuisine={JSON[x].height}
                    address={JSON[x].mass}
                    avg_rating={JSON[x].skin_color}/>
                </div> {miniRestaurants}</>;
        };

        //returns the full set of elements
        return miniRestaurants;
    } else {
        return <></>;
    }
}