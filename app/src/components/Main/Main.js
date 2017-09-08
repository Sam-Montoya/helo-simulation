import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <div>
                    <img src={'https://robohash.org/me'} alt='' />
                </div>
                <Link to='/profile'>
                    <button>Edit Profile</button>
                </Link>

                <div>
                    <h2>Recommended Friends</h2>
                    <h4>Sorted By</h4>
                    <select value='sortBy'>
                        <option value='firstName'>First Name</option>
                        <option value='lastName'>Last Name</option>
                        <option value='gender'>Gender</option>
                        <option value='hobby'>Hobby</option>
                        <option value='hairColor'>Hair Color</option>
                        <option value='eyeColor'>Eye Color</option>
                        <option value='birthday'>Birthday</option>
                    </select>
                    <h4>Show Friends Here</h4>
                    <a href={process.env.REACT_APP_LOGOUT}><button>Log Out</button></a>
                </div>
            </div>
        )
    }
}