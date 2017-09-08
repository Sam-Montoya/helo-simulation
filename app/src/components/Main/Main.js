import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div className='dashboard_container'>
                <section className='header'>
                    <h2>Helo</h2>
                    <h2>Dashboard</h2>
                    <h2>Logout</h2>
                </section>
                <h1>Main Page</h1>
                <div className='profile_container'>
                    <section className='profile_info'>
                        <img src={'https://robohash.org/me'} alt='' />
                    </section>
                    <Link to='/profile'>
                        <button>Edit Profile</button>
                    </Link>

                    <section className='welcome_landing'>
                        <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name.
                            The more you update your profile, the better recommendations we can make!</p>
                    </section>
                </div>

                <div className='recommended_friends'>
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
                </div>
            </div>
        )
    }
}