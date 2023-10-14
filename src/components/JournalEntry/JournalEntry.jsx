import React from 'react';
import { useHistory } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

function JournalEntry() {
    const history = useHistory();


    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Basic date picker" />
                </DemoContainer>
            </LocalizationProvider>

            <TextField
            id="standard-multiline-static"
            label="Journal Entry"
            multiline
            rows={4}
            placeholder="Start here"
            />
        
        </>
    )
}

export default JournalEntry;