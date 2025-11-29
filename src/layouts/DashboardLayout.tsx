import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div>
      <header>Navigation DashboardLayout</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
