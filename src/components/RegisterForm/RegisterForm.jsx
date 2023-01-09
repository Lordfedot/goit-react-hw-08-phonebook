import { Form, Label, Input } from './RegisterForm.styled';
import { Button } from 'components/Utils/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations/operationAuth';
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input name="name" value={name} onChange={handleChange} type="text" />
      </Label>
      <Label>
        Email
        <Input
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
        />
      </Label>
      <Label>
        Password
        <Input
          name="password"
          value={password}
          onChange={handleChange}
          type="text"
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
