import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import { StyledText, StyledTextBox } from './FeedbackStats.styled';

export const FeedbackStats = ({
  good,
  bad,
  neutral,
  positivePercentage,
  total,
  title,
}) => {
  return (
    <>
      <h2>{title}</h2>
      {total ? (
        <StyledTextBox>
          <StyledText>Good: {good}</StyledText>
          <StyledText>Neutral: {neutral}</StyledText>
          <StyledText>Bad: {bad}</StyledText>
          <StyledText>Total: {total}</StyledText>
          <StyledText>Positive feedback: {positivePercentage}%</StyledText>
        </StyledTextBox>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

FeedbackStats.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
  title: PropTypes.string,
};
