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


async function callAPI(searchString) {
    try {
        // const res = await fetch("http://localhost:8080/api/restaurant/name/Elmo's%20Bakery");
        // if (!res.ok) {
        //     //throw Error(res.statusText);
        // }
        // const json = await res.json();
        let jsonString = '[{"restaurantId":1,"name":"Elmo\'s Bakery","address":"123 Seasame Street","cuisine":"american","averageRating":3}]';
        let result = await jsonString;
        return JSON.parse(result);
    } catch (err) {
        console.log(err);
        //setError(err.message);
    }
}


function CreateMiniRestaurants(query) {
    // let json = callAPI(query.query);
    // console.log(query.query);
    // console.log(json);

    let response = useFetch('getById', 1);
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