import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/selectors';
import { logOut } from 'redux/operations/operationAuth';
import { Wrapper, LogOutButton, Text } from './UserMenu.styled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Wrapper>
      <Text>Welcome, {userName}</Text>
      <LogOutButton onClick={handleLogout} type="button">
        LogOut
      </LogOutButton>
    </Wrapper>
  );
};
