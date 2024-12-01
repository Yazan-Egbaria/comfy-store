import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <h2 className="text-primary text-4xl">Comfy</h2>
      </nav>

      <div className="pagePadding">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
