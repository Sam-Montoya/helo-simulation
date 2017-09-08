import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <Link to='/profile'>
                    <button>Edit Profile</button>
                </Link>
            </div>
        )
    }
}