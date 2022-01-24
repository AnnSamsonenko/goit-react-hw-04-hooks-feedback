import { GlobalStyle } from "../constants/GlobalStyle";
import { useState } from "react";

import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, bad, neutral } = state;
  const options = Object.keys(state);

  const onLeaveFeedback = (e) => {
    const key = e.target.name;
    setState((prevState) => {
      return { ...prevState, [key]: prevState[key] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countFeedbackPercentage = (feedbackCount) => {
    return Math.floor((feedbackCount * 100) / countTotalFeedback());
  };

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
