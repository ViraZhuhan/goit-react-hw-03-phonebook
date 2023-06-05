import PropTypes from 'prop-types';
import {Label, Input} from './Filter.styled'

const Filter = ({onChange, value}) => {
  return (
      <>
        <Label>Find contacts by name</Label>
        <Input type="text" name="filter" onChange={onChange} value={value} />
      </>
    );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
