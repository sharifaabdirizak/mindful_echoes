const journal_category = (state = [], action) => {
    switch(action.type) {
        case 'SET_CATEGORY': 
            return action.payload
        default:
            return state
    };
}


export default journal_category;