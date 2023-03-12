import { useState } from 'react';
import Section from './Section';
import FedbackOptions from './Options';
import Statisctics from './Statistics';
import { FeedbackContainer } from './App.styled';
// import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = e => {
    if (e === 'Good') {
      setGood(good + 1);
    } else if (e === 'Neutral') {
      setNeutral(neutral + 1);
    } else if (e === 'Bad') {
      setBad(bad + 1);
    }
  };

  // handleCounterFeedback = e => {
  //   this.setState(prevstate => ({
  //     ...prevstate,
  //     [e.target.name]: prevstate[e.target.name] + 1,
  //   }));
  // };

  // const { good, neutral, bad } = this.state;
  const countTotalFeedback = () => {
    let total = good + bad + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round(0 + (good / countTotalFeedback()) * 100);
  };
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
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={handleChange}
          />
        </Section>

        <Section title="Statistics">
          <Statisctics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            persentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </FeedbackContainer>
    </div>
  );
};
