import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";


function* fetchJournalEntry(action) {
  try {
    const journal_entry = yield axios({
      method: "GET",
      url: `/api/journal_entries/${action.id}`,
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

function* deleteJournalEntry(action) {
  try {
    const entry_to_delete = action.payload;
    const journal_id = yield axios({
      method: "delete",
      url: `/api/journal_entries/${entry_to_delete}`,
    });
    yield put({
      type: "SAGA/FETCH_PREVIOUS_ENTRIES",
    });
  } catch (error) {
    console.log("error in deleteEntry", error);
  }
}

function* addJournalEntrySaga() {
  yield takeEvery("SAGA/FETCH_PREVIOUS_ENTRIES", fetchPreviousEntries);
  yield takeEvery("SAGA/DELETE_JOURNAL_ENTRY", deleteJournalEntry);
  yield takeEvery("SAGA/POST_JOURNAL_ENTRY", postJournalEntry);
  yield takeEvery("SAGA/FETCH_JOURNAL_ENTRY", fetchJournalEntry);
  yield takeEvery("SAGA/FETCH_EDIT_ENTRY", fetchEditEntry);
  yield takeEvery("SAGA/UPDATE_JOURNAL_CONTENT", submitUpddatedJournalContent);
}

function* postJournalEntry(action) {
  try {
    const journal_info = action.payload;
    console.log('journal info', journal_info)
     yield axios({
      method: "POST",
      url: `/api/journal_entries`,
      data: journal_info,
    });
  } catch (error) {
    console.log("error in postJournalEntry", error);
  }
}

function* fetchEditEntry(action) {
  try {
    const journal_id = action.payload
    console.log('fetching entry no.', journal_id, 'to edit')
    const response = yield axios({
      method: "GET",
      url: `/api/journal_entries/${action.payload}`
    })
    yield put({
      type: "SET_ENTRY_TO_EDIT",
      payload: response.data
    })
  } catch (error) {
    console.log("error in fetchEditEntry", error);
  }
}

function* submitUpddatedJournalContent(action) {
  try {
    const journal_id = action.payload.id;
    const updated_content = action.payload.content;
    const response = yield axios({
      method: 'PUT',
      url: `/api/journal_entries/${journal_id}`,
      data: {
        content: updated_content
      }
    })
  } catch (error) {
    console.log('error in submitUpdatedJournalContent', error);
  }
}


export default addJournalEntrySaga;