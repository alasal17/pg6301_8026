import React from "react";
import moment from 'moment'

const TripSummery =({trip}) => {
    return(

        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{trip.title}</span>
                <p>Posted by {trip.authorFirstName} {trip.authorLastName}</p>
                <p className="grey-text">Time created: {moment(trip.createdAt.toDate()).calendar()}</p>

            </div>
        </div>


    )
}

export default TripSummery;