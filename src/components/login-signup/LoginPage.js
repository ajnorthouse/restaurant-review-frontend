import React from 'react';

export default function LoginPage(props){
    //Login for both Users and Admins.
    /* This should have inputs for:
        - Username
        - Password*/

    return (
        <div>
            <form>
                <label htmlFor="username-input">Username:</label>
                <input type="text" id="username-input" name="username-input">
                    {/* This should be props.username */}
                </input>
                
                <label htmlFor="password-input">Password:</label>
                <input type="password" id="password-input" name="password-input">
                    {/* This should stay blank */}
                </input>

                <button type="submit">Login</button>
            </form>
            <div>
                <p>Errors</p>
            </div>
        </div>
    );
}