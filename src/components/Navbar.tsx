import logo from "../assets/images/logo-cropped.svg";
import ToggleDarkMode from "./ToggleDarkMode";
import CustomDropDown from "./CustomDropDown";
import CustomDrawer from "./CustomDrawer";
const Navbar = () => {
  return (
    <div className=" shadow-md dark:shadow-gray-900 py-2 lg:px-14 sm:px-4 border-b-2 fixed top-0 w-full">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo image" className="lg:w-32 sm:w-24" />
        <div className="flex items-center gap-4">
          <ToggleDarkMode />
          <CustomDrawer />
          <CustomDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
