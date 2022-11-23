import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import axios from "axios";

import { addToken, addUser } from "../../Redux/actionCreators";
import { baseUrl } from "../../Shared/baseUrl";

const mapDispatchToProps = (dispatch) => ({
    addToken: () => dispatch(addToken()),
    addUser: () => dispatch(addUser()),
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        localStorage.clear();
    }

    handleLogin = async (event) => {
        const data = {
            username: this.state.username,
            password: this.state.password,
        };
        const userWithToken = await axios.post(baseUrl + "/login", data);
        console.log("%cuserToken: ", "color: white; background-color: black");
        console.log(userWithToken);
        await this.props.dispatch(addToken(userWithToken.data.token));
        await this.props.dispatch(addUser(userWithToken.data.user));
        window.localStorage.setItem("jwtBlob", userWithToken);
        window.localStorage.setItem(
            "jwtUserId",
            JSON.stringify(userWithToken.data.user.id)
        );
        window.localStorage.setItem(
            "jwtToken",
            JSON.stringify(userWithToken.data.token)
        );
        window.location.replace("/home");
    };

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleLoginOnEnter = (event) => {
        if (event.keyCode === 13) {
            this.handleLogin();
        }
    };

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-image">
                        <h1 className="card-heading">City Tours</h1>
                    </div>

                    <label className="input-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        v-model="user.username"
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleLoginOnEnter}
                        required
                        autoFocus
                    />
                    <label className="input-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        v-model="user.password"
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleLoginOnEnter}
                        required
                    />

                    <div className="action">
                        <button
                            type="submit"
                            className="action-button"
                            onClick={this.handleLogin}
                        >
                            Sign in
                        </button>
                    </div>
                    <div className="card-info">
                        <Link to="/register">Need an account?</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapDispatchToProps)(Login));
