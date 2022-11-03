import PropTypes from 'prop-types';
import { Stat, StatList } from "./Statistics.styled";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}){
    return (
        <>
        <Stat>
          <StatList>Good: {good}</StatList>
          <StatList>Neutral: {neutral}</StatList>
          <StatList>Bad: {bad}</StatList>
          <StatList>Total: {total}</StatList>
          <StatList>Positive feedback: {positivePercentage} %</StatList>
        </Stat>
        </>
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};