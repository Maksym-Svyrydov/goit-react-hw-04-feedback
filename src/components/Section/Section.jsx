import { Title } from './Section.styled';
import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Title>
      <h2>{title}</h2>
      {children}
    </Title>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
export default Section;
