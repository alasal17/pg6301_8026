import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const TripDetails = (props) => {
    const { trip } = props;
    if (trip) {
    return (
        <div className="container section trip-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <img src={trip.image}/>
                    <span className="card-title">{trip.title}</span>
                    <p>{trip.content}</p> </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {trip.authorFirstName} {trip.authorLastName}</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )

    } else{
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const trips = state.firestore.data.trips;
    const trip = trips ? trips[id] : null
    return {
        trip: trip
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'projects'
    }])
)(TripDetails)