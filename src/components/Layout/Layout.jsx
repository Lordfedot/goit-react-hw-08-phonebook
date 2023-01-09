import Box from 'components/Box';
import { Outlet } from 'react-router-dom';
import { Appbar } from 'components/Appbar/AppBar';
export const Layout = () => {
  return (
    <Box>
      <Appbar />
      <Box as="main" textAlign="center" p="30px">
        <Outlet />
      </Box>
    </Box>
  );
};
