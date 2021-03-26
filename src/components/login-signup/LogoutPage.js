import React from 'react';
import useLocalStorage from 'react-use-localstorage';

export default function LogoutPage(props){
    const [login, setLogin] = useLocalStorage('login', [{
        username: '',
        name: '',
        id: -1,
        type: ''
    }]);

    return (
        <div>
            <p>Goodbye! C:</p>
        </div>
    );
}