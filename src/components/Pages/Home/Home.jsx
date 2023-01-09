import { NavLink } from 'react-router-dom';
import { MainTitle } from './Home.styled';

export const Home = () => {
  return (
    <>
      <MainTitle>Home Page</MainTitle>
      <h2>You can add contact</h2>
      <p>Sign in <NavLink to="/login">here</NavLink></p>
      <p>Sign up <NavLink to="/register">here</NavLink></p>
    </>
  );
};
