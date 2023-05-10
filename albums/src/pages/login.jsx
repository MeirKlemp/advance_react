import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResource } from "../api";

function Login({ setUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers] = useResource("users");
  const navigate = useNavigate();

  function isAuth(userName, password) {
    const user = allUsers.find((user) => user.username === userName);
    console.log(`user: ${JSON.stringify(user)}`);
    if (user) {
      console.log(`user: ${user.address.geo.lat.slice(-4)}`);
      if (user.address.geo.lat.slice(-4) === password) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        return user;
      }
    }
    return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !password) return;
    const user = isAuth(userName, password);
    if (!user) {
      alert("Wrong userName or password");
      return;
    }
    setUser({
      userName: userName,
      password: password,
      id: user.id,
      name: user.name,
    });
    navigate("/");
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            userName
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
      </form>
    </section>
  );
}
export default Login;
