import ContactsList from 'components/ContactList/ContactsList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Box from 'components/Box';
import { MainTitle } from 'components/Pages/Home/Home.styled';

export const Contacts = () => {
  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <Box display="flex" justifyContent="space-between">
        <ContactForm />
        <Filter />
      </Box>
      <ContactsList />
    </>
  );
};
