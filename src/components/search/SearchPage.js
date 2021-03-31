import React from 'react';
import {useLocation} from "react-router-dom";
import RestaurantMiniView from '../restaurant/RestaurantMiniView';
import {useFetch, table, getMethod} from '../../helpers/AxiosHelper';
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
    let response = useFetch(table.RESTAURANT, getMethod.SEARCH, query.query);


    //this handles the return for the async call
    if (response.loading === false) {
        //this pulls the JSON objects out of the promise array.
        let JSON = (response.data.count !== undefined) ? 
            response.data.results :
            [response.data];
        console.log(JSON)


        //creates empty var for collection html elements
        let miniRestaurants = <></>;


        //if statement for checking edge-case of only one restaurant returned
        if (JSON[0].name === undefined) {
            //for loop for iterating through the list
            for (var x = 0; x < JSON[0].length; x++) {
                miniRestaurants = <>{miniRestaurants}
                    <div>
                        <RestaurantMiniView
                        title={JSON[0][x].name}
                        cuisine={JSON[0][x].cuisine}
                        address={JSON[0][x].address}
                        avg_rating={JSON[0][x].averageRating}/>
                    </div></>;
            };
        } else {
            //single object return
            miniRestaurants = <>
                <div>
                    <RestaurantMiniView
                    title={JSON.name}
                    cuisine={JSON.cuisine}
                    address={JSON.address}
                    avg_rating={JSON.averageRating}/>
                </div> {miniRestaurants}</>;
        }


        //returns the full set of elements
        return miniRestaurants;
    } else {
        return <></>;
    }
}