import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Services/Firebase";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [user] = useAuthState(auth);
  console.log(user);
  const fetchdata = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      {/* optional training */}
      <img src={user?.photoURL} alt="" />
      <h3>{user?.displayName}</h3>
      <h1>Product</h1>
      <div
        style={{
          display: "grid",
          gap: "100px",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {data.map((el) => (
          <div key={el.id}>
            <img src={el.image} alt="" height={200} width={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
