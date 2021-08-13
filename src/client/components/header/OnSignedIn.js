import React from "react";
import {NavLink} from "react-router-dom";
import {signOut} from "../auth/signIn";
import connect from "react-redux/lib/connect/connect";

const OnSignedIn =(props) => {
    return(
        <ul className="right">
            <li><NavLink to="/new-trip">New trip</NavLink></li>
            <li><a onClick={props.signOut}>Sign Out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(OnSignedIn);