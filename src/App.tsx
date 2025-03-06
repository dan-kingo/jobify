import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "sonner";
const App = () => {
  return (
    <>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
// #9781FA #2190FF #0E1219 #F8FAFC
