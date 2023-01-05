import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operation';
import ContactsList from './Phonebook/ContactsList';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import Box from './Box';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box pl="40px" mr="auto">
        <h1>Phonebook</h1>
        <ContactForm />
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </Box>
    </>
  );
};
