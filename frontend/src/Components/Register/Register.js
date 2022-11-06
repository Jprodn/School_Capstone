import axios from 'axios'
import { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { baseUrl } from '../../Shared/baseUrl'


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            success : false
        }

    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const data = { username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword, role: 'USER' }
        if (this.state.password === this.state.confirmPassword) {
            console.log("password match")
            axios.post(baseUrl + "/register", data)
            this.setState({success : true});            
        } else {
            alert("Password and Confirm Password must match!!!")
        }
    }

    render() {
        return (
            <div className='container'>

                <div class="card">

                    <div className="register-card-image">
                        <h1 className="register-card-heading">Create Account</h1>
                    </div>

                    <div className="register-card-body">

                        <div className="register-form">
                            <label className="sr-only">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                class="form-control"
                                placeholder="Username"
                                v-model="user.username"
                                onChange={this.handleInputChange}
                                required
                            />

                        </div>

                        <div className="register-form">
                            <label className="sr-only">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                v-model="user.password"
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <div className="register-form">
                            <input
                                type="password"
                                id="password-confirm"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirm Password"
                                v-model="user.password"
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="action">
                        <button type="submit" className="register-action-button" onClick={this.handleSubmit}>Register</button>
                        console.log("log current state" + this.state.success)
                        {this.state.success ? <Redirect to="/login" /> : null}
                    </div>
                    <div className="card-info">
                        <Link to="/login">Have an account?</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;