import React, { useEffect, useState }  from 'react';
import {Redirect} from 'react-router-dom';
import {ReactSession as Session} from 'react-client-session';
import { createEntry, getEntry, getMethod, table } from '../../helpers/AxiosHelper';

export default function SignUpPage(props){
    //State constants
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [tableChoice, setTableChoice] = useState("");
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState((Session.get("type") !== ""));
    const [loading, setLoading] = useState("");
    const [resultData, setResultData] = useState([]);
    const [readyForPost, setReadyForPost] = useState(false);

    //this polls the database for the username given when a button is hit
    useEffect(() => {
        if (tableChoice !== "") {
            const fetchData = async function() {
                try {
                    setLoading(true);
                    // console.log(window.btoa("anorthouse:password"));
                    const response = await getEntry(tableChoice, getMethod.BY_USERNAME, username);
                    if (response.status === 200) {
                        setResultData([response.data.userId, response.data.username, response.data.password, response.data.role, response.data.reviewCount, response.data.name]);
                    }
                } catch (error) {
                    setResultData(false);
                    throw error;
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
            setTableChoice("");
        }
    }, [tableChoice]);

    //checks for duplicate username
    useEffect(() => {
        if (resultData[0] !== undefined) {
            //check for already taken username
            if (resultData[1] === username) {
                setError("Username already taken! :(");
            } else {
                setReadyForPost(true);
            }
        }
    }, [resultData]);

    //finally, this listens for the update of resultData 
    useEffect(() => {
        if (readyForPost) {
            //call Post method
            let jsonObject = {"name":name, "password":password1, "reviewCount":0, "role":"USER", "username":username, "userId":-1,};
            //name, password, review_count, role, username, user_id
            const fetchData = async function() {
                try {
                    setLoading(true);
                    // console.log(window.btoa("anorthouse:password"));
                    const response = await createEntry(table.USER, jsonObject);
                    if (response.status === 200) {
                        console.log("woo!");
                    }
                } catch (error) {
                    setResultData(false);
                    throw error;
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
    
            //send redirect
            Session.set("username", resultData[1]);
            Session.set("name", resultData[5]);
            Session.set("type", resultData[3]);
            Session.set("password", resultData[2]);
            Session.set("id", resultData[0]);
            setRedirect(true);
        }
    }, [readyForPost]);

    //form event
    const handleSubmit = (event) => {
        //first checks the passwords for parity
        if (password1 !== password2) {
            setError("Your passwords don't match!");
        } else {
            setTableChoice(table.USER);
        }
        event.preventDefault();
    }

    let errors = error === "" ?
        <span></span> :
        <p className="error">{error}</p> ;

    let loadingMessage = loading === "" ?
        <span></span> :
        <p className="loading">{loading}</p> ;

    return redirect ?
        (<Redirect to="/"/>) :
        (<div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name-input">Name:</label>
                    <input type="text" id="name-input" name="name-input"
                            value={name} onChange={event => setName(event.target.value)}></input>
                
                <label htmlFor="username-input">Username:</label>
                    <input type="text" id="username-input" name="username-input"
                            value={username} onChange={event => setUsername(event.target.value)}></input>
                

                <label htmlFor="password1-input">Password1:</label>
                    <input type="text" id="password1-input" name="password1-input"
                            value={password1} onChange={event => setPassword1(event.target.value)}></input>
                <label htmlFor="password2-input">Password2:</label>
                    <input type="text" id="password2-input" name="password2-input"
                            value={password2} onChange={event => setPassword2(event.target.value)}></input>

                <button type="submit" value="submit">Submit</button>
            </form>
            <span>{redirect}</span>
            {loadingMessage}
            {errors}
        </div>
    );
}