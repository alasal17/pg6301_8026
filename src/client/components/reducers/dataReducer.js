const initState ={}

const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TRIP_SUCCESS':
            console.log('Add trip success');
            return state;
        case 'ADD_TRIP_ERROR':
            console.log('Add trip error');
            return state;
        default:
            return state;
    }
};

export default dataReducer;