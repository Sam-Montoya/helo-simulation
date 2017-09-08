import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
    constructor(){
        super();

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get('/api/auth/getAll').then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    render() {
        let filteredUsers = this.state.users.map((user, i) => {
            return <ul key={i}>
                <h4>{user.first_name}</h4>
                <h4>{user.last_name}</h4>
                <button></button>
            </ul>
        })
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
                {filteredUsers}
            </div>
        )
    }
}