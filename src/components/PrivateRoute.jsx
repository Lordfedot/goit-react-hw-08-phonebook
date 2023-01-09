import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getIsRefreshing } from 'redux/selectors';

export const PrivateRoute = ({ element: Element, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  console.log(shouldRedirect);

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Element />;
};
