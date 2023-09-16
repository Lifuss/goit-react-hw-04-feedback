import React, { useState } from 'react';
import Section from './Section/Section';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from '../Helpers/countFeedback';
import { FeedbackRequest } from './FeedbackRequest/FeedbackRequest';
import { FeedbackStats } from './FeedbackStats/FeedbackStats';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButton = e => {
    const { value } = e.target;
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const total = countTotalFeedback(good, bad, neutral);
  const positivePercentage = countPositiveFeedbackPercentage(good, total);

  return (
    <Section title="Please leave feedback">
      <FeedbackRequest
        options={['good', 'bad', 'neutral']}
        handleButton={handleButton}
      />
      <FeedbackStats
        title="Statistics"
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        positivePercentage={positivePercentage}
      />
    </Section>
  );
};
