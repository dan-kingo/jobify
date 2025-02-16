import FormControl from "../components/FormControl";

const Register = () => {
  return (
    <div>
      <FormControl
        labelText="Email Address"
        name="email"
        type="email"
        placeholder="Email Address"
      />
    </div>
  );
};

export default Register;
