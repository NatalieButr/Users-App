import React, { Component } from 'react';

class Login extends Component {
    state = {
        email:  '',
        password: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.history.push({
            pathname: '/profile',
            search: '',
            state: {email: email, password: password }
        })
    }
render() {
        const { email, password } = this.state;
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="email"
                    className="form-control mr-2"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="password"
                    className="form-control mr-2"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-success">Войти</button>
            </form>
        );
    }
}


export default Login;

//import axios from 'axios'
//import { createUser, fetchUser, saveUser, logIn, fetchUsers } from '../redux/actions';
//export default connect(mapStateToProps, { createUser, fetchUser, saveUser, logIn, fetchUsers })(Login);
/*const mapStateToProps = (state) => {
    return {
        users: state.users,
        currentId: state.currentId,
        user: state.user[0],
    }
}*/
 /* componentDidMount = () => {
        console.log(this.props)
        const { username, surname, phone, adress } = this.state;
        const userId = this.props.match.params.currentId;
        //this.props.fetchUsers()
        const apiUrl = `http://localhost:3010/api/profile/`;
        axios(apiUrl)
            .then(response => {
                let users = response.data;
                this.setState({users: users})
                });
            
    }
    import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
*/