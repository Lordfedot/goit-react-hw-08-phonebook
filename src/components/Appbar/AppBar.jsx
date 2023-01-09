import Box from 'components/Box';
import { getIsLoggedIn } from 'redux/selectors';
import { NavItem, ButtonWrapper } from './AppBar.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
export const Appbar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box as="header" borderBottom="2px solid black">
      <Box as="section" mr="auto" ml="auto" pt="36px" pb="36px">
        <Box pl="30px" pr="30px">
          <Box justifyContent="space-between" as="nav" display="flex">
            <ButtonWrapper>
              <NavItem to="/">Home</NavItem>
              {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
            </ButtonWrapper>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
