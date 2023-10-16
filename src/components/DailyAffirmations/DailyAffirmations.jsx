import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";

function DailyAffirmations() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const user = useSelector(store => store.user)

  const startEntry = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    dispatch({
      type: "SAGA/startEntry",
      payload: {
        daily_affirmation: event.target.value, 
        user_id: user.id,
        history,
      }
    });
    // history.push(`/journalSettings/`);
  };


  
  //created daily affirmation quotes/prompts.
  return (
    <>
      <h1>Daily affirmations</h1>

      <Button
        onClick={(event) => {
          startEntry(event);
        }}
        value={"I am allowed to feel good."}
        varient="text"
      >
        I am allowed to feel good.
      </Button>
      <Button
        onClick={(event) => {
          startEntry(event);
        }}
        value={"I am growing and I am going at my own pace."}
        varient="text"
      >
        I am growing and I am going at my own pace.
      </Button>
      <Button
        onClick={(event) => {
          startEntry(event);
        }}
        value={"I can be soft in my heart and firm in my boundaries."}
        varient="text"
      >
        I can be soft in my heart and firm in my boundaries.
      </Button>
      <Button
        onClick={(event) => {
          startEntry(event);
        }}
        value={"I am open to healing."}
        varient="text"
      >
        I am open to healing.
      </Button>
      <Button
        onClick={(event) => {
          startEntry(event);
        }}
        value={"I am responsible for myself, and I start there."}
        varient="text"
      >
        I am responsible for myself, and I start there.
      </Button>
      <Button
        onClick={(event) => {
          startEntry(event);
        }}
        value={"I deserve self respect and a clean space."}
        varient="text"
      >
        I deserve self respect and a clean space.
      </Button>
    </>
  );
}

export default DailyAffirmations;