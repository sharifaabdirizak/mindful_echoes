import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

function EditEntry() {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
 
  const edit_entry = useSelector(store => store.edit_entry);

  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_EDIT_ENTRY',
      payload: params.id
    })
  }, [params.id]);

  const update_journal_content = (event) => {
    dispatch({
      type: 'SET_JOURNAL_CONTENT',
      payload: event.target.value
    })
  }

  const submit_updated_journal_content = (event) => {
    event.preventDefault();
    dispatch({
      type: "SAGA/UPDATE_JOURNAL_CONTENT",
      payload: {
        id: params.id,
        content: edit_entry.content
      }
    })
    console.log('updated content', edit_entry.content)
    history.push('/previousEntries');
  }


  return (
    <>
      <h1>Journal Entry</h1>
      <form>
      <input label="Select Date"
        value={edit_entry.date}
        type= "text"
      >
      </input>

      <TextField
        id="standard-multiline-static"
        label="Journal Entry"
        multiline
        rows={4}
        value={edit_entry.content || ''}
        onChange={update_journal_content}
      >
      </TextField>
    
      
      <Button
        variant="contained"
        onClick={submit_updated_journal_content}
      >
        Next
      </Button>

      </form>

    </>
  );
}

export default EditEntry;