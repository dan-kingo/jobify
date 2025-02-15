import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>navigation bar</nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
