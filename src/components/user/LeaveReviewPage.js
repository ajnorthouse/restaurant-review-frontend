import React, {useState} from 'react';
import useLocalStorage from 'react-use-localstorage';

export default function LeaveReviewPage(props) {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (event) => {
        callAPI(rating, description, setError);
        event.preventDefault();
    }

    const changeRating = (event) => {
        setRating(event.target.value);
    }
    const changeDescription = (event) => {
        setDescription(event.target.value);
    }

    let errors = error === "" ?
        <span></span> :
        <p className="error">{error}</p> ;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="rating-input">Rating:</label>
                    <input type="number" id="rating-input" name="rating-input"
                            value={rating} onChange={changeRating}></input>

                <label htmlFor="description-input">Description:</label>
                    <input type="textarea" id="description-input" name="description-input"
                            value={description} onChange={changeDescription}></input>

                <button type="submit" value="submit">Submit</button>
            </form>
            {errors}
        </div>
    );
}


async function callAPI(rating, description, setError) {
    try {
        console.log(rating);
        console.log(description);
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