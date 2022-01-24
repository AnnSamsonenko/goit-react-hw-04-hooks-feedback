import { GlobalStyle } from "../constants/GlobalStyle";
import { Component } from "react";

import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  static defaultProps = {
    state: { good: 0, neutral: 0, bad: 0 },
  };

  state = this.props.state;

  onLeaveFeedback = (e) => {
    const key = e.target.name;
    this.setState((prevState) => {
      return { [key]: (prevState[key] += 1) };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countFeedbackPercentage = (feedbackCount) => {
    return Math.floor((feedbackCount * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, bad, neutral } = this.state;
    const options = Object.keys(this.state);
    const totalStats = this.countTotalFeedback();
    const positiveStats = this.countFeedbackPercentage(good);
    return (
      <>
        <GlobalStyle />
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
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
  }
}
