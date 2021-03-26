import React from 'react';
import useLocalStorage from 'react-use-localstorage';

//this checks if the user is validly logged in
export default function CheckLogin() {
    const [login, setLogin] = useLocalStorage('login', [{
        username: '',
        name: '',
        id: -1
    }]);

    console.log(login.username);
    console.log(login.name);
    console.log(login.id);

    return (login.id !== -1);
}