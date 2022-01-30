import { GlobalStyle } from "../constants/GlobalStyle";
import { useState } from "react";

import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = (e) => {
    const key = e.target.name;
    switch (key) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Number(good) + Number(bad) + Number(neutral);
  };

  const countFeedbackPercentage = (feedbackCount) => {
    return Math.floor((feedbackCount * 100) / countTotalFeedback());
  };

  const options = Object.keys({ good, bad, neutral });
  const totalStats = countTotalFeedback();
  const positiveStats = countFeedbackPercentage(good);
  return (
    <>
      <GlobalStyle />
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={"Statistics"}>
        {totalStats > 0 ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={totalStats}
            positivePercentage={positiveStats}
          />
        ) : (
          <Notification message={"There is no feedback"} />
        )}
      </Section>
    </>
  );
};
