import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function PreviousEntries() {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);


    useEffect(() => {
        dispatch({
            type: "SAGA/FETCH_PREVIOUS_ENTRIES",
          });
    })
    


    return (
        <>
        <h1>Previous Entries</h1>
        
        </>
    )
}

export default PreviousEntries;