import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function JournalEntry() {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const [journalContent, setJournalContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // State for the selected date

  useEffect(() => {}, [params.id]);

  const updateContent = () => {
    console.log("you are updating journal category");
    dispatch({
      type: "SAGA/UPDATE_CONTENT",
      payload: {
        id: params.id,
        content: journalContent,
        date: selectedDate, // Include the selected date
      },
    });
  };

  const updateJournalContent = (e) => {
    setJournalContent(e.target.value);
  };

  return (
    <>
      <h1>Journal Entry</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)} 
        />
      </LocalizationProvider>

      <TextField
        id="standard-multiline-static"
        label="Journal Entry"
        multiline
        rows={4}
        value={journalContent}
        onChange={updateJournalContent}
        placeholder="Start here"
      />

      <Button
        variant="contained"
        onClick={() => {
          updateContent();
          history.push("/previousEntries");
        }}
      >
        Next
      </Button>
    </>
  );
}

export default JournalEntry;
