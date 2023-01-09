import { NavItem, ButtonWrapper } from 'components/Appbar/AppBar.styled';

export const AuthNav = () => {
  return (
    <ButtonWrapper>
      <NavItem to="/login">Login</NavItem>
      <NavItem to="/register">Register</NavItem>
    </ButtonWrapper>
  );
};
