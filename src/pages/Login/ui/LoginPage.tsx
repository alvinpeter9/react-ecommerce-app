import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div>
      LoginPage or <Link to={"/register"}>Register</Link> or{" "}
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default LoginPage;
