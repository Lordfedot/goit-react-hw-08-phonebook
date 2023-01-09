import { Form, Label, Input } from './LoginForm.styled';
import { Button } from 'components/Utils/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations/operationAuth';
export const LoginForm = () => {
  const dispath = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
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
    dispath(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          onChange={handleChange}
          value={email}
          name="email"
          type="email"
        />
      </Label>
      <Label>
        Password
        <Input
          onChange={handleChange}
          value={password}
          name="password"
          type="text"
        />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
