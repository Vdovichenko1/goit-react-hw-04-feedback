import PropTypes from 'prop-types';
import { SectionTitle } from "./Section.styled";

export default function Section({ title, children }) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};