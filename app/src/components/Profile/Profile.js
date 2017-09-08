import React, { Component } from 'react';

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
            birthdayYear: ''
        }

        this.updateState = this.updateState.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
    }

    updateState(property, input) {
        this.setState({
            [property]: input
        })
    }
    // updateBirthday(input){
    //     this.setState({
    //         birthdayDay: input[]
    //     })
    // }

    updateInfo() {
        console.log(this.state);
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

    render() {
        return (
            <div>
                <div>
                    <h1>Profile Page</h1>
                    <button onClick={() => this.updateInfo()}>Update</button>
                    <button>Cancel</button>
                </div>

                <div>
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
                        <option value='Janurary'>Janurary</option>
                        <option value='Febuaray'>Feburary</option>
                        <option value='March'>March</option>
                        <option value='April'>April</option>
                        <option value='May'>May</option>
                        <option value='June'>June</option>
                        <option value='August'>Augsut</option>
                        <option value='September'>September</option>
                        <option value='October'>October</option>
                        <option value='November'>November</option>
                        <option value='December'>December</option>
                    </select>

                    <h5>Birthday Year</h5>
                    <select value={this.state.birthdayYear} onChange={(input) => this.updateState('birthdayYear', input.target.value)}>
                        <option disabled value=''>--Select--</option>
                        {this.birthdayYearValues()}
                    </select>

                </div>
            </div>
        )
    }
}