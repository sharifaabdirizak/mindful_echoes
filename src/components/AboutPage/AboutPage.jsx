import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">

        
           <div className="Special Thanks">
          <h3>Special Thanks:</h3>
          <ul>
            <li>Thanks to Andrew, Matt, Dane, all of the staff at Prime Digital Acedemy </li>
            <li>Jade Cohort</li>
            <li>Mentors</li>
            <li>Special thanks to all my family and friends</li>
          </ul>
        </div>

        <section className="New Updates">
          <h3>Update features that will be posted in the near future:</h3>
          <ul>
            <li>There will be a trendings column where users can interact with read new affirmation trends. </li>
          </ul>
        </section>
           <section className="Technologies ">
        <h3>Technologies Used:</h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Sagas</li>
            <li>Passport</li>
            <li>Postico</li>
            <li>PostgreSQL</li>
            <li>Express</li>    
          </ul>
        </section>
      </div>
    
  );
}

export default AboutPage;
