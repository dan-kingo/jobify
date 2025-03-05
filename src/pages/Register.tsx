import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import FormControl from "../components/FormControl";
import registerData from "@/assets/constants/registerData";
import userSchemas, { userData } from "../utils/userSchema";
import { useState } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userData>({ resolver: zodResolver(userSchemas) });
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data: userData) => {
    setLoading(true);

    await axios
      .post("http://localhost:3000/api/auth/register", data)
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    reset();
  };

  return (
    <form
      className="min-h-screen bg-gray-100 dark:bg-[#09090B] py-6 flex flex-col justify-center sm:py-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative sm:max-w-md sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9781FA] to-[#2190FF] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 hidden md:block  sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white  dark:bg-[#121212] shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-sm mx-auto"></div>
          <div>
            <h1 className="text-2xl font-semibold mb-4">Register Here</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              {registerData.map((field, index) => (
                <FormControl
                  key={index}
                  {...field}
                  register={register}
                  error={
                    errors[field.name as keyof userData]?.message as string
                  }
                />
              ))}

              <div className="relative">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#9781FA] w-full to-[#2190FF]  text-white rounded-sm px-2 py-1 hover:opacity-85"
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
              </div>
              <div className="relative">
                <p className="dark:text-gray-50 text-sm md:text-lg">
                  Already a member?{" "}
                  <Link to="/login" className="text-[#9781FA]">
                    Login
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

export default Register;
