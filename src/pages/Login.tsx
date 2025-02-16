import { Link } from "react-router-dom";
import FormControl from "../components/FormControl";

const Login = () => {
  return (
    <form className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative sm:max-w-md sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9781FA] to-[#2190FF] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6  sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-sm mx-auto"></div>
          <div>
            <h1 className="text-2xl font-semibold mb-4">Login Here</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <FormControl
                type="email"
                labelText="Email Address"
                name="email"
                placeholder="Email Address"
              />
              <FormControl
                type="password"
                labelText="Password"
                name="password"
                placeholder="Password"
              />
              <div className="relative">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#9781FA] to-[#2190FF]  text-white rounded-sm px-2 py-1 hover:opacity-85 w-full"
                >
                  Login
                </button>
              </div>
              <div className="relative">
                <button
                  type="button"
                  className="w-full bg-transparent border-2 rounded-sm text-[#9781FA]   px-2 py-1 hover:rounded-full"
                >
                  Explore The App
                </button>
              </div>
              <div className="relative">
                <p>
                  Not a member yet? {"  "}
                  <Link to="/register" className="text-[#9781FA]">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
