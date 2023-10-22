const edit_entry = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ENTRY_TO_EDIT':
            return action.payload;
        // case 'SET_ENTRY_TO_EDIT_DATE':
        //     return { ...state, date: action.payload };
        case 'SET_JOURNAL_CONTENT':
            return {...state, content: action.payload}
        default:
            return state;
    }
  };

export default edit_entry