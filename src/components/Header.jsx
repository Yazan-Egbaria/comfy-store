import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-neutral text-neutral-content py-2">
      <div className="pagePadding flex justify-center sm:justify-end">
        {/*USER */}
        {/*LINKS */}
        <div className="flex items-center justify-center gap-x-6">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Login / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
