import PropTypes from 'prop-types';
import { PhonebookTitle } from './Title.styled';

const Title = ({ title }) => {
  return <PhonebookTitle>{title}</PhonebookTitle>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
