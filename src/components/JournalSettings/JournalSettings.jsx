import React from "react";
import { useHistory } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function JournalSettings() {
  const history = useHistory();

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Affirmation Categories</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        //   value={age}
        //   onChange={handleChange}
          label="Affirmation Categories"
        >
          <MenuItem >Confidence</MenuItem>
          <MenuItem >Self-Esteem</MenuItem>
          <MenuItem >Love</MenuItem>
          <MenuItem >Graditude</MenuItem>
          <MenuItem >Health</MenuItem>
          <MenuItem >Exercise</MenuItem>
          <MenuItem >Forgiveness</MenuItem>
          <MenuItem >Relationship</MenuItem>
          <MenuItem >Attitude</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Journal Time</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        //   value={age}
        //   onChange={handleChange}
          label="Journal Time"
        >
          <MenuItem >1 minute </MenuItem>
          <MenuItem >5 minutes</MenuItem>
          <MenuItem >10 minutes </MenuItem>   
        </Select>
      </FormControl>
      <Button variant="contained" 
        onClick={() => {
            history.push('/journalEntry');
          }}>
            Next
        </Button>



    </>
  );
}

export default JournalSettings;
