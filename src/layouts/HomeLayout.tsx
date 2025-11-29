import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div>
      <header>Navigation Home</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
