import React from "react";
import TripSummery from "./TripSummery";
import { Link } from 'react-router-dom'
const TripList = ({trips}) => {
    return (
        <div className="trip-list section">

            { trips && trips.map(trip => {
                return (
                    <Link to={'/trip/' + trip.id} key={trip.id}>
                    <TripSummery trip={trip}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default TripList;