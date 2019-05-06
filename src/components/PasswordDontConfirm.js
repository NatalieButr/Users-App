import React, { Component } from 'react';

export default class PasswordDontConfirm extends Component {
    render() {
        const { email, password, username, surname, confirmPassword, handleSubmit, handleChange, handleConfirmPassword} = this.props
        console.log(this.props)
        return (
            <form className="form-inline" onSubmit={handleSubmit}>
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
                    placeholder="Введите ваш email"
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
                    onChange={this.handleConfirmPassword}
                    required
                />
                <button type="submit" className="btn btn-success">
                    Зарегистрироваться      </button>
                <span>Пароли не совпадают</span>
            </form>
        )
    }
}