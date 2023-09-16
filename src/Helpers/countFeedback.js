import PropTypes from 'prop-types';

export const countTotalFeedback = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  return total;
};

export const countPositiveFeedbackPercentage = (good, total) => {
  let positivePercentage = 0;
  if (good && !total) {
    return (positivePercentage = 100);
  }
  if (good && total) {
    return (positivePercentage = Math.ceil((good / total) * 100));
  }
  return positivePercentage;
};

countTotalFeedback.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};
countPositiveFeedbackPercentage.propTypes = {
  good: PropTypes.number,
  total: PropTypes.number,
};
