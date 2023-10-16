import React, { useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function JournalSettings() {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    }, [params.id])

    const updateCategory = (event) => {
      console.log('you are updating journal category', event.target.value);
      dispatch({
        type: 'SAGA/UPDATE_CATEGORY',
        payload: {
            id: params.id,
            category: event.target.value
        }
      })
    }

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Affirmation Categories</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Affirmation Categories"
          onChange={(event) => updateCategory(event)}

        >
          <MenuItem value={'Confidence'}>Confidence</MenuItem>
          <MenuItem value={'Self-Esteem'}>Self-Esteem</MenuItem>
          <MenuItem value={'Love'}>Love</MenuItem>
          <MenuItem value={'Gratitude'}>Graditude</MenuItem>
          <MenuItem value={'Health'}>Health</MenuItem>
          <MenuItem value={'Exercise'}>Exercise</MenuItem>
          <MenuItem value={'Forgiveness'}>Forgiveness</MenuItem>
          <MenuItem value={'Relationship'}>Relationship</MenuItem>
          <MenuItem value={'Attitude'}>Attitude</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Journal Time</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Journal Time"
        >
          <MenuItem value={'1 minute'}>1 minute </MenuItem>
          <MenuItem value={'5 minutes'}>5 minutes</MenuItem>
          <MenuItem value={'10 minutes'}>10 minutes</MenuItem>  
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
