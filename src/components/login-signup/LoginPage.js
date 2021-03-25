import React from 'react';

export default function LoginPage(props){
    //Login for both Users and Admins.
    /* This should have inputs for:
        - Username
        - Password*/

    return (
        <div>
            <form>
                {/* <label>Username:</label>
                <input>Username</input>
                
                <label>Password:</label>
                <input>Password</input> */}
                
                <button>Login</button>
            </form>
            <div>
                <p>Errors</p>
            </div>
        </div>
    );
}