import React, { Component } from 'react';
import Statistics from "./Statistics";
import Notification from "./Notification";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = o => {
    this.setState(prevState => {
      return {
        [o]: prevState[o] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, element) => {
      return total + element
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className='div'>
        <h1>Cafe Expresso</h1>
          <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={this.handleClickBtn}
          />
          </Section>
        <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
          ) : <Notification message="There is no feedback"/>}
          </Section>
      </div>
    );
  }
}


