import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Imagine having a personal coach in your pocket, ready to help boost your motivation and confidence throughout the day. Mindful echos gives users a dose of positivity, designated to shape their mindset and improve overall happiness. Mindful echos provides daily uplifting affirmations, personalized goal journaling and sets the users on a path to success to positivity.</p>
      </div>
    </div>
  );
}

export default AboutPage;
