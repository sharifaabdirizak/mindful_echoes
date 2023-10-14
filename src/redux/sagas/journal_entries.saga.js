import axios from "axios";
import {takeEvery, put} from 'redux-saga/effects'

function* addJournalEntry(action){
    try {
        const daily_affirmation = action.payload
        const journal_entry = yield axios({
            method: 'POST',
            url: "/api/journal_entries",
            data: {
                daily_affirmation: daily_affirmation
            }
        })
    } catch (error) {
        console.log('error in addJournalEntry', error);
    }
}

function* addJournalEntrySaga() {
    yield takeEvery('/SAGA/startEntry', addJournalEntry);
}

export default addJournalEntrySaga;