import { useSelector } from 'react-redux';
import { getIsLoggedIn, getIsRefreshing } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ element: Element, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const shouldRedirect = !isRefreshing && isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Element />;
};
