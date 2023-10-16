import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* addJournalEntry(action) {
  try {
    const daily_affirmation = action.payload.daily_affirmation;
    const user_id = action.payload.user_id;
    console.log("affirmation:", daily_affirmation);
    const journal_entry = yield axios({
      method: "POST",
      url: "/api/journal_entries",
      data: {
        daily_affirmation: daily_affirmation,
        user_id: user_id,
      },
    });
    yield put({
      type: "SAGA/FETCH_JOURNAL_ENTRY",
      payload: journal_entry.data,
    });
  } catch (error) {
    console.log("error in addJournalEntry", error);
  }
}

function* fetchJournalEntry(action) {
  try {
    const journal_entry = yield axios({
      method: "GET",
      url: `/api/journal_entries/{action.id}`,
    });
  } catch (error) {
    console.log("error in fetchJournalEntry", error);
  }
}

function* fetchPreviousEntries() {
  try {
    const previous_entries = yield axios({
      method: "GET",
      url: `/api/journal_entries`,
    });
    yield put({
      type: "SET_PREVIOUS_ENTRIES",
      payload: previous_entries.data,
    });
  } catch (error) {
    console.log("error in fetchPreviousEntries", error);
  }
}


function* addJournalEntrySaga() {
  yield takeEvery("SAGA/startEntry", addJournalEntry);
  yield takeEvery("SAGA/FETCH_PREVIOUS_ENTRIES", fetchPreviousEntries);
}

export default addJournalEntrySaga;
