import React, { Component } from 'react';
import axios from 'axios';
import authHOC from '../components/authHOC';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            username:  '',
            surname: '',
            phone:  '',
            adress: '',
            email: '',
            password: '',
            load: false,
            id: '',
        }
    }
componentDidMount() {
    const apiUrl = `http://localhost:3010/api/profile/`;
        axios(apiUrl)
        .then(response => {
            let users = response.data;
            console.log(users)
            let user = users.filter((u) => u.email === this.props.params.email)[0];
            this.setState({ id: user.id, load: true, username: user.username, surname: user.surname, phone: user.phone, adress: user.adress, email: user.email, password: user.password});
         });
    }
handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

handleEdit = () => {
    this.setState({edit: true})
 }
saveChanges = (e) => {
        e.preventDefault();
        const { username, surname, adress, phone, password, email, id} = this.state;
        const nUs = {
                username: username,
                surname: surname,
                adress: adress,
                phone: phone,
                password: password,
                email: email,
                id: id,
            }
     const url = `http://localhost:3010/api/profile/${id}`;
     axios.put(url, nUs);
     this.setState({ edit: false, username: username, surname: surname, adress: adress, phone: phone })
}
 
render() {
        const { edit, load, username, surname, adress, phone } = this.state;
        if (load === false)  {
            return (
                <div>
                    Страница загружается
               </div>
            )
        } 
        else {
        if (edit === true) {
           return (
                <React.Fragment>
                    <div>
                        <form className="form-inline" onSubmit={this.saveChanges}>
                            < span>Name</span>
                            <input
                                type="text"
                                name="username"
                                className="form-control mr-2"
                                placeholder="Firstname"
                                defaultValue={username}
                                onChange={this.handleChange}
                            />
                            <span>Surname</span>
                            <input
                                type="text"
                                name="surname"
                                className="form-control mr-2"
                                placeholder="Surname"
                                defaultValue={surname}
                                onChange={this.handleChange}
                            />
                            <span>Phone number</span>
                            <input
                                type="text"
                                name="phone"
                                className="form-control mr-2"
                                placeholder="Phone numder"
                                defaultValue={phone}
                                onChange={this.handleChange}
                            />
                            <span>Adress</span>
                            <input
                                type="text"
                                name="adress"
                                className="form-control mr-2"
                                placeholder="Введите ваш name"
                                  defaultValue={adress}
                                onChange={this.handleChange}
                            />
                            <button type="submit" className="btn btn-info"> Save Changes </button>
                        </form>
                    </div>
                </React.Fragment>
            )
        }
     return (
        <React.Fragment>
            <div>
                <div>FullName</div> <span className='bio-inf'>{username} {surname}</span>
                <div>Phone Number</div> <span className='bio-inf'>{phone}</span>
                <div>Adress</div> <span className='bio-inf'>{adress}</span>
           </div>
            <button onClick={this.handleEdit} type="submit" className="btn btn-success">Edit Profile </button>     
        </React.Fragment>
        )
    } 
}
}

export default authHOC(Profile);