import { Component } from 'react';
import Section from './Section';
import FedbackOptions from './Options';
import Statisctics from './Statistics';
import { FeedbackContainer } from './App.styled';
// import Notification from './Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleCounterFeedback = e => {
    this.setState(prevstate => ({
      ...prevstate,
      [e.target.name]: prevstate[e.target.name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + bad + neutral;

    const countPositiveFeedbackPercentage = Math.round(
      0 + (good / countTotalFeedback) * 100
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackContainer>
          <Section title="Please leave feedback">
            <FedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleCounterFeedback}
            />
          </Section>

          <Section title="Statistics">
            <Statisctics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              persentage={countPositiveFeedbackPercentage}
            />
          </Section>
        </FeedbackContainer>
      </div>
    );
  }
}
