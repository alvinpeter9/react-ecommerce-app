import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div>
      RegisterPage or <Link to={"/login"}>Login</Link> or{" "}
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default RegisterPage;
