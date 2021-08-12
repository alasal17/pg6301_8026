import React from "react";
import TripSummery from "./TripSummery";

const TripList = ({trips}) => {
    return (
        <div className="trip-list section">
            { trips && trips.map(trip => {
                return (
                    <TripSummery trip={trip} key={trip.id} />
                )
            })}
        </div>
    )
}

export default TripList;