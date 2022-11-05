import { useState } from 'react';
import Statistics from "./Statistics";
import Notification from "./Notification";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const reviews = { good, neutral, bad };

  const handleClickBtn = (e) => {
    switch (e) {
      case 'good':
        setGood(good=> good + 1)
        break;
      case 'neutral':
        setNeutral(neutral=> neutral + 1);
        break;
      case 'bad':
        setBad(bad=> bad + 1)
break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(reviews).reduce((total, element) => {
      return total + element
    }, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    return ((good * 100) / countTotalFeedback()).toFixed(2);
  };

  return (
      <div className='div'>
        <h1>Cafe Expresso</h1>
          <Section title="Please leave feedback">
          <FeedbackOptions
            options={reviews}
            onLeaveFeedback={handleClickBtn}
          />
          </Section>
        <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
          ) : <Notification message="There is no feedback"/>}
          </Section>
    </div>
  )
}