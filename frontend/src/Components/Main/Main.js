import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { addToken, deleteUser } from "../../Redux/actionCreators";
import NavLinkBar from "../Routers/NavLinkBar";
import Router from "../Routers/Router";



const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToken: () => {
    dispatch(addToken());
  },
  deleteUser: () => {
    dispatch(deleteUser());
  },
});



class Main extends Component {
  render() {
    return (
      <div>
        {this.props.token.token !== undefined ?
          (<div className="navbar"><NavLinkBar /></div>) : 
          (<Link to="/login" />)
        }
        <Router user={mapStateToProps} />
      </div>
    );
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
