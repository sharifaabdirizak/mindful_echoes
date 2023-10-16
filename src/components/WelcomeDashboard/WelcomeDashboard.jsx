import React from 'react';
import { useHistory } from 'react-router-dom';

function WelcomeDashboard() {
    const history = useHistory();


    return (
        <>
        <h1>Welcome Dashboard</h1>
        <button onClick={() => {
            history.push('/dailyAffirmations');
          }}>
            Daily Affirmations
        </button>
        
        <button onClick={() => {
            history.push('/journalEntry');
          }}>
            Journal Entry
        </button>

        <button onClick={() => {
            history.push('/previousEntries');
          }}>
            Previous Entries
        </button>
       
        
        </>
    )
}

export default WelcomeDashboard;