import { Form, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";

const Login = () => {
  return (
    <div className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card bg-base-100 flex w-96 flex-col gap-y-4 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="identifier"
          defaultValue="test@test"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>

        <button type="button" className="btn btn-secondary btn-block">
          Guest User
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="link link-hover link-primary ml-2 capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
