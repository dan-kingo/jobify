import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const CustomButton = ({ children }: Props) => {
  return (
    <button className=" border-none bg-[#9781FA] text-white hover:opacity-85 flex gap-2 rounded-md py-[5px] px-2 items-center">
      {children}
    </button>
  );
};

export default CustomButton;
