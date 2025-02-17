interface Props {
  labelText: string;
  name: string;
  type: string;
  placeholder: string;
}
const FormControl = ({ labelText, name, type, placeholder }: Props) => {
  return (
    <div className="relative">
      <input
        required
        id={labelText}
        name={name}
        type={type}
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 dark:text-gray-50 focus:outline-none focus:borer-rose-600"
        placeholder={placeholder}
      />
      <label
        htmlFor={labelText}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {labelText}
      </label>
    </div>
  );
};

export default FormControl;
