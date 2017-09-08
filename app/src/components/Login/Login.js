import React, {Component} from 'react';

export default class Login extends Component {
    render () {
        return (
            <div>
                <a href={process.env.REACT_APP_LOGIN}><button>Login/Register</button></a>
            </div>
        )
    }
}