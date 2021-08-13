import React, {Component} from 'react';
import { firestoreConnect } from 'react-redux-firebase'

import TripList from "./components/trip/TripList";
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect} from "react-router-dom";



class Dashboard extends Component {

    render() {
        const {trips, auth} = this.props;

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

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'trips' }
    ])
)(Dashboard)