import { Form, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";

const Register = () => {
  return (
    <div className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card bg-base-200 flex w-96 flex-col gap-y-4 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="Username" name="username" />
        <FormInput type="email" label="Email" name="email" />
        <FormInput type="password" label="Password" name="password" />

        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already a member?{" "}
          <Link
            to="/login"
            className="link link-hover link-primary ml-2 capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
