import { deleteContact } from 'redux/operations/operation';
import { ButtonDelete, ContactItem } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactItem>
      <p>
        {contact.name}: {contact.number}
      </p>
      <ButtonDelete onClick={handleDelete} type="button">
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};
