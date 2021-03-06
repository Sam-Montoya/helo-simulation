import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            hairColor: '',
            eyeColor: '',
            hobby: '',
            birthdayDay: '',
            birthdayMonth: '',
            birthdayYear: '',
            birthdayFormat: '',
            errorMessage: ''
        }

        this.updateState = this.updateState.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
    }

    updateState(property, input) {
        this.setState({
            [property]: input
        })
    }

    updateInfo() {
        //Update state values to Redux!
        if (this.state.birthdayDay
            && this.state.birthdayMonth
            && this.state.birthdayYear) {
            console.log(this.state);
            let birthdayFormat2 = this.state.birthdayYear + '/' + this.state.birthdayMonth + '/' + this.state.birthdayDay;
            this.setState({
                birthdayFormat: birthdayFormat2,
                errorMessage: ''
            })
        } else {
            this.setState({
                errorMessage: 'Required fields: Birthday Day, Month, and Year.'
            })
        }

    }
    cancelButton() {
        //Change state values to the same as Redux store values
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Profile Page</h1>
                    <button onClick={() => this.updateInfo()}>Update</button>
                    <Link to='/dashboard'>
                        <button>Cancel</button>
                    </Link>
                </div>

                <div>
                    <div>
                        <img src={'https://robohash.org/me'} alt='' />
                    </div>
                    <h5>First Name</h5>
                    <input type='text' onChange={(input) => this.updateState('firstName', input.target.value)} />
                    <h5>Last Name</h5>
                    <input type='text' onChange={(input) => this.updateState('lastName', input.target.value)} />

                    <h5>Gender</h5>
                    <select value={this.state.gender} onChange={(input) => this.updateState('gender', input.target.value)}>
                        <option disabled value=''>--Select--</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>

                    <h5>Hair Color</h5>
                    <select value={this.state.hairColor} onChange={(input) => this.updateState('hairColor', input.target.value)}>
                        <option disabled value=''>--Select--</option>
                        <option value='brown'>Brown</option>
                        <option value='blue'>Blue</option>
                        <option value='green'>Green</option>
                        <option value='red'>Red</option>
                        <option value='blonde'>Blonde</option>
                        <option value='white'>White</option>
                    </select>

                    <h5>Eye Color</h5>
                    <select value={this.state.eyeColor} onChange={(input) => this.updateState('eyeColor', input.target.value)}>
                        <option disabled value=''>--Select--</option>
                        <option value='brown'>Brown</option>
                        <option value='blue'>Blue</option>
                        <option value='green'>Green</option>
                    </select>

                    <h5>Hobby</h5>
                    <select value={this.state.hobby} onChange={(input) => this.updateState('hobby', input.target.value)}>
                        <option disabled value=''>--Select--</option>
                        <option value='videogames'>Video Games</option>
                        <option value='hiking'>Hiking</option>
                        <option value='fishing'>Fishing</option>
                        <option value='rafting'>Rafting</option>
                    </select>

                    <h5>Birthday Day</h5>
                    <select value={this.state.birthdayDay} onChange={(input) => this.updateState('birthdayDay', input.target.value)}>
                        <option disabled value=''>--Select--</option>
                        {this.birthdayDayValues()}
                    </select>

                    <h5>Birthday Month</h5>
                    <select value={this.state.birthdayMonth} onChange={(input) => this.updateState('birthdayMonth', input.target.value)}>
                        <option disabled value=''>--Select--</option>
                        <option value='01'>Janurary</option>
                        <option value='02'>Feburary</option>
                        <option value='03'>March</option>
                        <option value='04'>April</option>
                        <option value='05'>May</option>
                        <option value='06'>June</option>
                        <option value='07'>July</option>
                        <option value='08'>Augsut</option>
                        <option value='09'>September</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>
                    </select>

                    <h5>Birthday Year</h5>
                    <select value={this.state.birthdayYear} onChange={(input) => this.updateState('birthdayYear', input.target.value)}>
                        <option disabled value=''>--Select--</option>
                        {this.birthdayYearValues()}
                    </select>

                </div>

                {/* Error Message */}
                <div>
                    <h4>{this.state.errorMessage}</h4>
                </div>
            </div>
        )
    }

    birthdayDayValues() {
        var days = [];
        for (let i = 1; i <= 31; i++) {
            if (i < 10)
                days.push(<option key={i} value={'0' + i}>{'0' + i}</option>)
            else
                days.push(<option key={i} value={i}>{i}</option>)
        }
        return days;
    }

    birthdayYearValues() {
        var years = [];
        for (let i = 2017; i >= 1917; i--) {
            years.push(<option key={i} value={i}>{i}</option>)
        }
        return years;
    }
}