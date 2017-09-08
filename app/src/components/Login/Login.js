import React, {Component} from 'react';
import './Login.css';
import logo from '../../logo.png';

export default class Login extends Component {
    render () {
        return (
            <div className="background_container">
                <div className="login_box">
                    <img src= { logo } alt='logo' />
                    <div className="logo_text open-sans-bold">Helo</div>
                <div className="login_link">
                    <a href={process.env.REACT_APP_LOGIN}><button>Login/Register</button></a>
                </div>
                </div>
            </div>
        )
    }
}