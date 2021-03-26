import React, { useState }  from 'react';

export default function SignUpPage(props){
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (event) => {
        callAPI(name, username, password1, password2, setError);
        event.preventDefault();
    }
    
    const changeName = (event) => {
        setName(event.target.value);
    }
    const changeUsername = (event) => {
        setUsername(event.target.value);
    }
    const changePassword1 = (event) => {
        setPassword1(event.target.value);
    }
    const changePassword2 = (event) => {
        setPassword2(event.target.value);
    }
    
    let errors = error === "" ?
        <span></span> :
        <p className="error">{error}</p> ;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name-input">Name:</label>
                    <input type="text" id="name-input" name="name-input"
                            value={name} onChange={changeName}></input>
                
                <label htmlFor="username-input">Username:</label>
                    <input type="text" id="username-input" name="username-input"
                            value={username} onChange={changeUsername}></input>
                

                <label htmlFor="password1-input">Password1:</label>
                    <input type="text" id="password1-input" name="password1-input"
                            value={password1} onChange={changePassword1}></input>
                <label htmlFor="password2-input">Password2:</label>
                    <input type="text" id="password2-input" name="password2-input"
                            value={password2} onChange={changePassword2}></input>

                <button type="submit" value="submit">Submit</button>
            </form>
            {errors}
        </div>
    );
}


async function callAPI(name, username, password1, password2, setError) {
    try {
        console.log(name);
        console.log(username);
        console.log(password1);
        console.log(password2);
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