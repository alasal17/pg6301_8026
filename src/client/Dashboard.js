import React, {Component} from 'react';
import { firestoreConnect } from 'react-redux-firebase'

import TripList from "./components/trip/TripList";
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect} from "react-router-dom";



class Dashboard extends Component {

    render() {
        const {trips, auth} = this.props;
        if (!auth.uid) return <Redirect to='/login' />
        return (
            <div>
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <TripList trips={trips}/>
                        </div>
                        <div className="col s12 m5 offset-m1">

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        trips: state.firestore.ordered.trips,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'trips' }
    ])
)(Dashboard)