import PropTypes from 'prop-types';
import { Button } from "./FeedbackOptions.styled";

export default function FeedbackOptions ({ options, onLeaveFeedback }) {
    return Object.keys(options).map((option) => (
        <Button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
        >
            {option}
        </Button>
    ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};