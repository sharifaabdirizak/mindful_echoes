import axios from "axios";
import {takeEvery, put} from 'redux-saga/effects'

function* addJournalEntry(action){
    try {
        const daily_affirmation = action.payload.daily_affirmation
        const user_id = action.payload.user_id
        console.log('affirmation:', daily_affirmation)
        const journal_entry = yield axios({
            method: 'POST',
            url: "/api/journal_entries",
            data: {
                daily_affirmation: daily_affirmation, 
                user_id: user_id
            }
        })
    } catch (error) {
        console.log('error in addJournalEntry', error);
    }
}

function* addJournalEntrySaga() {
    yield takeEvery('SAGA/startEntry', addJournalEntry);
}

export default addJournalEntrySaga;