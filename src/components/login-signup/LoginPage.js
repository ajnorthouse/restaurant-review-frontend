import React, { useState }  from 'react';
import {Redirect} from 'react-router-dom';
import {ReactSession as Session} from 'react-client-session';

export default function LoginPage(props){
    //Checks to see if user can access page
    const needRedirect = (Session.get("type") !== "");

    //State constants
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (event) => {
        callAPI(username, password, setError);
        event.preventDefault();
    }

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }
    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    let errors = error === "" ?
        <span></span> :
        <p className="error">{error}</p> ;

    return needRedirect ?
        (<Redirect to="/"/>) :
        (<div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username-input">Username:</label>
                    <input type="text" id="username-input" name="username-input"
                            value={username} onChange={changeUsername}></input>

                <label htmlFor="password-input">Password:</label>
                    <input type="text" id="password-input" name="password-input"
                            value={password} onChange={changePassword}></input>

                <button type="submit" value="submit">Submit</button>
            </form>
            {errors}
        </div>
    );
}


async function callAPI(username, password, setError) {
    try {
        console.log(username);
        console.log(password);
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