import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ element: Element, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Element />;
};
