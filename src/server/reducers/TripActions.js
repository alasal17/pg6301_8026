export const AddTrip = (trip) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'ADD_TRIP', trip });
    }
};