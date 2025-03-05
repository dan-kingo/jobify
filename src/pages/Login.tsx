import { Link } from "react-router-dom";
import FormControl from "../components/FormControl";
import loginData from "@/assets/constants/loginData";
import { useForm } from "react-hook-form";
import loginSchema, { loginType } from "@/utils/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({ resolver: zodResolver(loginSchema) });
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data: loginType) => {
    setLoading(true);

    let isComponentMounted = true;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data
      );

      if (isComponentMounted) {
        if (response.data.success) {
          toast.success("Logged in successfully!");
          navigate("/dashboard");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "An unknown error occurred.";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to login");
      }
    } finally {
      if (isComponentMounted) setLoading(false);
    }

    return () => {
      isComponentMounted = false;
    };
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen bg-gray-100 dark:bg-[#09090B] py-6 flex flex-col justify-center sm:py-12"
    >
      <div className="relative sm:max-w-md sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9781FA] to-[#2190FF] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6  sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white dark:bg-[#121212] shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-sm mx-auto"></div>
          <div>
            <h1 className="text-2xl font-semibold mb-4">Login Here</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              {loginData.map((field, index) => (
                <FormControl
                  key={index}
                  {...field}
                  register={register}
                  error={
                    errors[field.name as keyof loginType]?.message as string
                  }
                />
              ))}

              <div className="relative">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#9781FA] to-[#2190FF]  text-white rounded-sm px-2 py-1 hover:opacity-85 w-full"
                >
                  {isLoading ? "Logging..." : "Login"}
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
                <p className="dark:text-gray-50">
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
