import { fetchCurrentUser } from 'redux/operations/operationAuth';
import { Home } from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { Contacts } from './Pages/contacts/contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/contacts"
          element={<PrivateRoute element={Contacts} redirectTo="/" />}
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute element={LoginForm} redirectTo="/contacts" />
          }
        ></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute element={RegisterForm} redirectTo="/contacts" />
          }
        ></Route>
      </Route>
    </Routes>
  );
};
