import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />

      <div className="pagePadding">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
