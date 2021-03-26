import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {ReactSession as Session} from 'react-client-session';

export default function UpdateRestaurantPage(props) {
    //Checks to see if user can access page
    const needRedirect = (Session.get("type") !== "admin");

    //State constants
    const [title, setTitle] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");

    
    const handleSubmit = (event) => {
        callAPI(title, cuisine, address, setError);
        event.preventDefault();
    }

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }
    const changeCuisine = (event) => {
        setCuisine(event.target.value);
    }
    const changeAddress = (event) => {
        setAddress(event.target.value);
    }

    let errors = error === "" ?
        <span></span> :
        <p className="error">{error}</p> ;

    return needRedirect ?
        (<Redirect to="/"/>) :
        (<div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title-input">Title:</label>
                    <input type="text" id="title-input" name="title-input"
                            value={title} onChange={changeTitle}></input>

                <label htmlFor="cuisine-input">Cuisine:</label>
                    <input type="text" id="cuisine-input" name="cuisine-input"
                            value={cuisine} onChange={changeCuisine}></input>

                <label htmlFor="address-input">Address:</label>
                    <input type="text" id="address-input" name="address-input"
                            value={address} onChange={changeAddress}></input>

                <button type="submit" value="submit">Submit</button>
            </form>
            {errors}
        </div>
    );
}


async function callAPI(title, cuisine, address, setError) {
    try {
        console.log(title);
        console.log(cuisine);
        console.log(address);
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