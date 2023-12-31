import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Imagine having a personal coach in your pocket, ready to help boost your motivation and confidence throughout the day. Mindful Echoes gives users a dose of positivity, designated to shape their mindset and improve overall happiness. Mindful Echoes provides daily uplifting affirmations, personalized goal journaling and sets the users on a path to success to positivity.</p>
    </div>
  );
}

export default InfoPage;
