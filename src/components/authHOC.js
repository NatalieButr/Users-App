import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default (ChildComponent) => {
    return class authHOC extends Component {
        state = {}
        componentDidMount() {
        const apiUrl = `http://localhost:3010/api/profile/`       
        axios(apiUrl)
            .then(response => {
                let users = response.data;
                this.setState({users: users})
            })
        }
        auth() {
        const {users} = this.state;
        const email =  this.props.location.state.email;
        const password = this.props.location.state.password;
        if (users !== undefined && email !==undefined && password !==undefined) {
                let isRegister = users.filter(user => user.email === email)[0]
                if (isRegister !== undefined) {
                    if (isRegister.password === password) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }    
    }   
    }
noName() {
            return <div className="noname-wrap">
                You enter wrong email or password
				<br />
                <Link className='btn btn-danger' to='/login/'>try again?</Link>
                <Link className='btn btn-info' to='/register/'>sign up</Link>
            </div>
        }


        render() {
            return (
                this.auth() ? <ChildComponent params={this.props.location.state}/> : this.noName()
            )
        }
    }
}