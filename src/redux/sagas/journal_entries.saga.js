import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

// function* addJournalEntry(action) {
//   try {
//     const { daily_affirmation, user_id, history } = action.payload; 
//     console.log("affirmation:", daily_affirmation);
//     const response = yield axios.post("/api/journal_entries", {
//       daily_affirmation: daily_affirmation,
//       user_id: user_id,
//     });

//     // Extract the newId from the response
//     const new_id = response.data.id;

//     yield put({
//       type: "SAGA/FETCH_JOURNAL_ENTRY",
//       payload: response.data,
//     });


//     history.push(`/journalSettings/${new_id}`);
//   } catch (error) {
//     console.log("error in addJournalEntry", error);
//   }
// }

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
  // yield takeEvery("SAGA/startEntry", addJournalEntry);
  yield takeEvery("SAGA/FETCH_PREVIOUS_ENTRIES", fetchPreviousEntries);
  yield takeEvery("SAGA/DELETE_JOURNAL_ENTRY", deleteJournalEntry);
  yield takeEvery("SAGA/POST_JOURNAL_ENTRY", postJournalEntry);
  yield takeEvery("SAGA/UPDATE_CONTENT", updateJournalContent);
  yield takeEvery("SAGA/FETCH_JOURNAL_ENTRY", fetchJournalEntry);
}

function* postJournalEntry(action) {
  try {
    const journal_info = action.payload;
     yield axios({
      method: "POST",
      url: `/api/journal_entries`,
      data: journal_info,
    });
  } catch (error) {
    console.log("error in postJournalEntry", error);
  }
}

function* updateJournalContent(action) {
  try {
    const journal_to_update = action.payload;
    const response = yield axios({
      method: "PUT",
      url: `/api/journal_entries/${journal_to_update.id}`,
      data: {
        content: journal_to_update.content, 
        date: journal_to_update.date, 
      },
    });
    console.log("response", action);
    console.log(response);
    if (response.status === 200) {
      
      yield put({
        type: "SAGA/UPDATE_CONTENT",
        payload: journal_to_update,
      });
    } else {
      console.log("Update failed with status:", response.status);
    }
  } catch (error) {
    console.log("error in updateJournalContent", error);
  }
}

export default addJournalEntrySaga;
