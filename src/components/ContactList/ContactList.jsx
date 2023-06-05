import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

const ContactsList =({ contacts, onDelete }) => {
  return (
    <List>
        {contacts.map(({ name, number, id }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </Item>
        ))}
      </List>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
