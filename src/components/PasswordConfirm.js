import React, { Component } from 'react';

export default class PasswordConfirm extends Component {
    render() {
        const { email, password, username, surname, confirmPassword, handleChange, handleConfirmPassword } = this.props
        return (
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    className="form-control mr-2"
                    placeholder="Введите ваш name"
                    value={username}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    name="surname"
                    className="form-control mr-2"
                    placeholder="Введите ваш surname"
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
                    placeholder="Введите ваш пароль"
                    value={password}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    name="confirmPassword"
                    value={confirmPassword}
                    className="form-control mr-2"
                    placeholder="Подтвепдите ваш пароль"
                    onChange={this.handleConfirmPassword}
                    required
                />
                <button type="submit" className="btn btn-success">
                    Зарегистрироваться   </button>
            </form>
        )
    }
}