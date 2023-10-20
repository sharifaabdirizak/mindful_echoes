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
  

//edit button
  const editButton = (entry) => {
    setEditingEntry(entry);
  };

  const saveEditedEntry = (updatedEntry) => {
    // Dispatch an action to save the updated entry to the server.
    dispatch({
      type: 'SAGA/UPDATE_JOURNAL_ENTRY',
      payload: updatedEntry,
    });

    // Clear the editing state.
    setEditingEntry();

    // Fetch the updated entries.
    dispatch({
      type: 'SAGA/FETCH_PREVIOUS_ENTRIES',
    });
  };


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
          <button onClick={() => {
         
          history.push(`editEntry/${currentEntry.id}`);
        }} >Edit</button>

          
          </div>
          ))}

        </>
    )
}

export default PreviousEntries;