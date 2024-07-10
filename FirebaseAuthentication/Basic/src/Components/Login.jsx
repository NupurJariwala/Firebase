import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../service/Firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    console.log(data);
    //Firebase emailpasswrod
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email..."
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
