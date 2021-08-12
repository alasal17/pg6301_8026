import React, {Component} from 'react';

import Notifications from "./Notifications";
import TripList from "./TripList";
import {connect} from "react-redux";


class Dashboard extends Component {

    render() {
        const { trips } = this.props;
        return (
            <div>
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <TripList trips={trips}/>
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notifications/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trip: state.trip.trips
    }
}

export default connect(mapStateToProps)(Dashboard)