import PropTypes from 'prop-types';


const ContactList =({ contacts, deleteContact })=> {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}
export default ContactList;

const ContactItem=({ contact, deleteContact })=> {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li>
      <span className='listName'>{contact.name}</span>
      <span className='phoneNumber'>{contact.number}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
