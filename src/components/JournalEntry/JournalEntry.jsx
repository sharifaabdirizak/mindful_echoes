import React from 'react';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function JournalEntry() {
    const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    }, [params.id])




    return (
        <>
         <h1>Journal Entry</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DemoContainer components={['DatePicker']}> */}
                    <DatePicker label="Basic date picker" />
                {/* </DemoContainer> */}
            </LocalizationProvider>

            <TextField
            id="standard-multiline-static"
            label="Journal Entry"
            multiline
            rows={4}
            placeholder="Start here"
            />

            <Button variant="contained" 
                onClick={() => {
                history.push('/previousEntries');
            }}>
                Next
            </Button>
        
        </>
    )
}

export default JournalEntry;