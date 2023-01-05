import { deleteContact } from 'components/redux/operation';
import { ButtonDelete, ContactItem } from './Styled/ContactsList.styled';
import { useDispatch } from 'react-redux';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactItem>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <ButtonDelete onClick={handleDelete} type="button">
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};
