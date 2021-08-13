
export const addTrip = (trip) => {
    return (dispatch, getState, {getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('trips').add({
            ...trip,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date(),
            merge:true
        }).then(() => {
            dispatch({ type: 'ADD_TRIP_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'ADD_TRIP_ERROR' }, err);
        });
    }
};