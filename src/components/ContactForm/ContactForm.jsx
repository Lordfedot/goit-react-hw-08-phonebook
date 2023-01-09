import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations/operation';
import { getContacts } from 'redux/selectors';
import { Form, Input } from './ContactForm.styled';
import { Button } from 'components/Utils/Button';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.text.value;
    const number = form.elements.phone.value;
    const contactsNames = contacts.map(contact => contact.name);

    const data = {
      name: name,
      number: number,
    };

    if (contactsNames.includes(name)) {
      alert('This name is already exists');
      return;
    }
    dispatch(addContact(data));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Input
          placeholder="Name"
          type="text"
          name="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <Input
          placeholder="Phone"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
