import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./Services/Firebase";
import GoogleButton from "react-google-button";
import { useAuthState } from "react-firebase-hooks/auth";
const Login = () => {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const [user] = useAuthState(auth);
  console.log(user);
  const handleLogout = () => {
    signOut(auth)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        alert("logout");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>{user?.displayName}</h3>
      <GoogleButton onClick={handleClick}>Login with Google</GoogleButton>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
