const previous_entries = ( state = [], action) => {
    switch (action.type) {
        case 'SET_PREVIOUS_ENTRIES':
            return action.payload;
        default:
            return state;
    };
}

export default previous_entries