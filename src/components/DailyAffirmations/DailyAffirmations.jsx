import React from "react"; 
import { useHistory } from 'react-router-dom';

function DailyAffirmations() {
    const history = useHistory();

//created daily affirmation quotes/prompts.
    return (
        <>
        <h1>daily affirmations</h1>
        <h2 onClick={() => {
            history.push('/journalSettings');
          }}> I am allowed to feel good.</h2>
        <h2 onClick={() => {
            history.push('/journalSettings');
          }}> I am growing and I am going at my own pace</h2>
        <h2 onClick={() => {
            history.push('/journalSettings');
          }}> I can be soft in my heart and firm in my boundaries.</h2>
        <h2 onClick={() => {
            history.push('/journalSettings');
          }}> I am open to healing.</h2>
        <h2 onClick={() => {
            history.push('/journalSettings');
          }}> I am responsible for myself, and I start there</h2>
        <h2 onClick={() => {
            history.push('/journalSettings');
          }}> I deserve self respect and a clean space.</h2>

        </>
    )
}

export default DailyAffirmations