const initState = {
    trips: [
        {id: '1', title: 'Roma', content: 'blah blah blah'},
        {id: '2', title: 'London', content: 'blah blah blah'},
        {id: '3', title: 'Oslo', content: 'blah blah blah'}
    ]
}

const tripReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TRIP':
            console.log('Add new trip', action.trip);
    }
    return state;
};

export default tripReducer;