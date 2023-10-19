import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function PreviousEntries() {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    const previous_entries = useSelector((store)=> store.previous_entries)


    useEffect(() => {
        dispatch({
            type: "SAGA/FETCH_PREVIOUS_ENTRIES",
          });
    }, [])
    
  

 const deleteButton = (id) => {
      console.log('deleted a journal entry');
      dispatch({
          type: 'SAGA/DELETE_JOURNAL_ENTRY',
          payload: id
      })
      dispatch({
        type: "SAGA/FETCH_PREVIOUS_ENTRIES",
      });
  }
    return (
        <>
        <h1>Previous Entries</h1>
        {previous_entries.map((currentEntry) => (
        <div key={currentEntry.id} className="entries">
          <p>{currentEntry.daily_affirmation}</p>
          <ul>{currentEntry.date}</ul>
          <ul>{currentEntry.category}</ul>
          <ul>
          {currentEntry.content}
          </ul>
          


          <button onClick={()=>deleteButton(currentEntry.id)}>Delete</button>
          </div>
          ))}

        </>
    )
}

export default PreviousEntries;