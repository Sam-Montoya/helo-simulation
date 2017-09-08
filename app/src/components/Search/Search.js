import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <div>
                <h2>Search Page</h2>
                <select value='searchUsers'>
                    <option value='firstName'>First Name</option>
                    <option value='lastName'>Last Name</option>
                </select>
                <input type='text' />
                <button>Search</button>
                <button>Reset</button>
            </div>
        )
    }
}