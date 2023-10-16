const journal_entry = (state = [], action) => {
    switch(action.type) {
        case 'SET_JOURNAL_ENTRY': 
            return action.payload
        default:
            return state
    };
}

const previous_entries = ( state = [], action) => {
    switch (action.type) {
        case 'SET_PREVIOUS_ENTRIES':
            return action.payload;
        default:
            return state;
    }
}

export default journal_entries