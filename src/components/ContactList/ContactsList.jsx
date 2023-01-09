import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { List, ContactTitle } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from '../ContactItem/ContactItem';
import { fetchContacts } from 'redux/operations/operation';
const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };
  const visibleContacts = getVisibleContacts();

  return (
    <>
      <ContactTitle>Contacts</ContactTitle>
      {contacts.length < 1 && <h2> There is no contacts yet</h2> }
      <List>
        {visibleContacts.map(contact => (
          <Contact contact={contact} key={contact.id}></Contact>
        ))}
      </List>
    </>
  );
};

export default ContactsList;
