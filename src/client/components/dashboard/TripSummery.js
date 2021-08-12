import React from "react";

const TripSummery =({trip}) => {
    return(

            <div className="card z-depth-0 trip-summery">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{trip.title}</span>
                    <p>Posted by Monica</p>
                    <p className="grey-text">3rd September, 2am</p>
                </div>
            </div>


    )
}

export default TripSummery;