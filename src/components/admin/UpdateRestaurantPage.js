import React, {useState} from 'react';
import useLocalStorage from 'react-use-localstorage';

export default function UpdateRestaurantPage(props) {
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

    return (
        <div>
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