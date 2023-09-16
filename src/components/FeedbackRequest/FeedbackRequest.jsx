import { StyledBoxBtn, StyledBtn } from './FeedbackRequest.styled';
import PropTypes from 'prop-types';

export const FeedbackRequest = ({ handleButton, options }) => {
  return (
    <StyledBoxBtn>
      {options.map(el => (
        <StyledBtn key={el} onClick={handleButton} value={el}>
          {el}
        </StyledBtn>
      ))}
    </StyledBoxBtn>
  );
};

FeedbackRequest.propTypes = {
  HandleButton: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
