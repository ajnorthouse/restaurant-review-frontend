import React, { useEffect, useState }  from 'react';
import {Redirect} from 'react-router-dom';
import {ReactSession as Session} from 'react-client-session';
import {getEntry, getMethod, table} from '../../helpers/AxiosHelper';

export default function LoginPage(props){
    //State constants
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [tableChoice, setTableChoice] = useState("");
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState((Session.get("type") !== ""));
    const [loading, setLoading] = useState("");
    const [resultData, setResultData] = useState([]);

    //this polls the database for the username given when a button is hit
    useEffect(() => {
        if (tableChoice !== "") {
            const fetchData = async function() {
                try {
                    setLoading(true);
                    // console.log(window.btoa("anorthouse:password"));
                    const response = await getEntry(tableChoice, getMethod.BY_USERNAME, username);
                    if (response.status === 200) {
                        let id = (response.data.userId === undefined) ?
                            response.data.adminId :
                            response.data.userId ;
                        setResultData([id, response.data.username, response.data.password, response.data.role, response.data.reviewCount, response.data.name]);
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

    //this then takes that polled information and goes from there.
    useEffect(() => {
        if (resultData[0] !== undefined) {
            //check for bad username
            if (resultData[1] === "N/A") {
                setError("invalid username");
            }
    
            //check password
            else if (resultData[2] !== password) {
                setError("invalid password");
            }

            //send redirect
            else {
                Session.set("username", resultData[1]);
                Session.set("name", resultData[5]);
                Session.set("type", resultData[3]);
                Session.set("password", resultData[2]);
                Session.set("id", resultData[0]);
                setRedirect(true);
            }
        }
    }, [resultData]);

    //button events
    const userLogin = (event) => {
        setTableChoice(table.USER);
        event.preventDefault();
    }
    const adminLogin = (event) => {
        setTableChoice(table.ADMIN);
        console.log("SetTableChoice");
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
            <span>{redirect}</span>
            {loadingMessage}
            {errors}
        </div>
    );
}