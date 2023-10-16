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
    })
    


    return (
        <>
        <h1>Previous Entries</h1>
        {previous_entries.map((entries) => (
        <p key={entries.id} className="entries">
          {entries.content}
          </p>))}
        </>
    )
}

export default PreviousEntries;