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
import { useSelector } from "react-redux";

function JournalEntry() {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const [journalContent, setJournalContent] = useState("");
  const [selectedDate, setSelectedDate] = useState('January 1st'); // State for the selected date

  const daily_affirmation = useSelector((store) => store.journal_entry.daily_affirmation);

  const journal_category = useSelector((store) => store.journal_category.category);

  useEffect(() => {}, [params.id]);

  const updateContent = () => {
    console.log("you are updating journal category");
    // console.log("d", selectedDate.$d)
    console.log("time", selectedDate);
    dispatch({
      type: "SAGA/POST_JOURNAL_ENTRY",
      payload: {
        // id: params.id,
        content: journalContent,
        date: selectedDate,
        daily_affirmation: daily_affirmation,
        category: journal_category,
      },
    });
  };

  const updateJournalContent = (e) => {
    setJournalContent(e.target.value);
  };

  const handleHover = () => {
    setJournalContent("I had a great day!");
  };


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Journal Entry</h1>
      <div style={{ marginBottom: 20 }}>
        <input
          label="Select Date"
          value={selectedDate}
          type="text"
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <TextField
          id="standard-multiline-static"
          label="Journal Entry"
          multiline
          rows={4}
          value={journalContent}
          onChange={updateJournalContent}
          placeholder="Start here"
          onMouseEnter={handleHover}
        />
      </div>
      <Button
        variant="contained"
        onClick={() => {
          updateContent();
          history.push("/previousEntries");
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default JournalEntry;

