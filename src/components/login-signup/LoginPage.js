import React, { useEffect, useState }  from 'react';
import {Redirect} from 'react-router-dom';
import {ReactSession as Session} from 'react-client-session';
import {getEntry, getMethod, table} from '../../helpers/AxiosHelper';

export default function LoginPage(props){
    //Checks to see if user can access page
    const needRedirect = (Session.get("type") !== "");

    //State constants
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [tableChoice, setTableChoice] = useState("");
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState("");
    const [loading, setLoading] = useState("");
    const [resultData, setResultData] = useState([]);

    //this polls the database for the username given when a button is hit
    useEffect(() => {
        if (tableChoice !== "") {
            const fetchData = async function() {
                try {
                    setLoading(true);
                    // console.log(window.btoa("anorthouse:password"));
                    // console.log(url);
                    const response = await getEntry(tableChoice, getMethod.BY_USERNAME, username);
                    if (response.status === 200) {
                        setResultData(response);
                    }
                } catch (error) {
                    setResultData(false);
                    throw error;
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [tableChoice]);

    //this then takes that polled information and goes from there.
    useEffect(() => {
        if (tableChoice !== "") {
            //check for bad username
            if (resultData.username === "N/A") {
                console.log("invalid username");
            }
    
            //check password
    
            //send redirect
    
            //{ userId: -1, username: "N/A", password: "N/A", name: "Anonymous", reviewCount: 0, role: "USER" }
        }
    }, [resultData]);

    //button events
    const userLogin = (event) => {
        setTableChoice(table.USER);
        event.preventDefault();
    }
    const adminLogin = (event) => {
        setTableChoice(table.ADMIN);
        event.preventDefault();
    }

    return needRedirect ?
        (<Redirect to="/"/>) :
        (<div>
            <form>
                <label htmlFor="username-input">Username:</label>
                    <input type="text" id="username-input" name="username-input"
                            value={username} onChange={event => setUsername(event.target.value)}></input>

                <label htmlFor="password-input">Password:</label>
                    <input type="text" id="password-input" name="password-input"
                            value={password} onChange={event => setPassword(event.target.value)}></input>

                <button type="submit" onClick={userLogin}>User Login</button>
                <button type="submit" onClick={adminLogin}>Admin Login</button>
            </form>
            <div>{resultData}</div>
            <div>{redirect}</div>
            <div>{loading}</div>
            <div>{error}</div>
        </div>
    );
}