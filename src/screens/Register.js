import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


class Register extends Component {
    state = {
        email:  '',
        password: '',
        confirmPassword: '',
        username: '',
        surname:  '',
        error: false,
        currentId: 0,
        havePage: false,
    }
componentDidMount = () => {
        const apiUrl = `http://localhost:3010/api/profile`;
        axios(apiUrl)
            .then(response => {
                let users = response.data;
                this.setState({ users: users })
            });
    }
handleChange = (e) => {
        const { name, value } = e.target; 
        this.setState({ [name]: value});
    }
handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, username, surname, confirmPassword, currentId, users } = this.state;
        if (password !== confirmPassword) {
            this.setState({error: true})
        } else {
        const user = {
            username: username,
            surname: surname,
            email: email,
            currentId: currentId,
            password: password,
            phone: 'phone',
            adress: 'adress',
        }
            let isUniqueEmail = users.map((user) => user.email === email);
            if (isUniqueEmail.includes(true) === false) {
            const url = 'http://localhost:3010/api/profile/'
            axios.post(url, user)
            .then(response => {
             this.setState({ currentId: currentId + 1, email: '', password: '', confirmPassword: '', username: '', surname: '', error: false });
             this.props.history.push(`/login`);
            });               
            } else {
            this.setState({havePage: true})     
    }
}
}
handleConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value })
}


 render() {
        const { email, password, username,surname, confirmPassword, error, havePage } = this.state;
    if (havePage === true) {
        return (
            <React.Fragment>
            <span>Email занят</span>
            <Link to='/register' className='btn btn-danger'> TRY AGAIN </Link>
            </React.Fragment>
        )
    }
        if(error=== true) {
            return (
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        className="form-control mr-2"
                        placeholder="Firstname"
                        value={username}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="surname"
                        className="form-control mr-2"
                        placeholder="Your surname"
                        value={surname}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="email"
                        className="form-control mr-2"
                        placeholder="Email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="password"
                        className="form-control mr-2"
                        placeholder="Your password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="confirmPassword"
                        value={confirmPassword}
                        className="form-control mr-2"
                        placeholder="Confirm your password"
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit" className="btn btn-success">
                        Sign up </button>
                    <span>Пароли не совпадают</span>
                </form>
            )
        }
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    className="form-control mr-2"
                    placeholder="Firstname"
                    value={username}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    name="surname"
                    className="form-control mr-2"
                    placeholder="Surname"
                    value={surname}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    name="email"
                    className="form-control mr-2"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    name="password"
                    className="form-control mr-2"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    name="confirmPassword"
                    value={confirmPassword}
                    className="form-control mr-2"
                    placeholder="Confirm your password"
                    onChange={this.handleConfirmPassword}
                    required
                />              
                <button type="submit" className="btn btn-success">
                Sign up   </button>
            </form>
        );
    }
}

export default Register;

// let userId = this.state.currentId;
//  const apiUrl = `http://localhost:3010/api/profile/${userId}`
/* axios.post(apiUrl, user)
 .then(response => { console.log('cоздание юзера на отдельную страницу')
});*/

//import { connect } from 'react-redux';
//import { createUser, fetchUser} from '../redux/actions';