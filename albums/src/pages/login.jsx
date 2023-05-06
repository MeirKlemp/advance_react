import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../components/api";

function Login({ setUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const allUsers = useApi("users");

  function IsAuth(name, password) {
    const user = allUsers.find((user) => user.name === name);
    if (user) {
      console.log(`user: ${user.address.geo.lat.substring(4)}`);
      if (user.address.geo.lat.substring(4) === password) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        return true;
      }
    }
    return false;
  }

  function getId(name) {
    const user = allUsers.find((user) => user.name === name);
    if (user) {
      return user.id;
    }
    return null;
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !password) return;
    if (!IsAuth(name, password)) {
      alert("Wrong name or password");
      return;
    }
    setUser({ name: name, password: password, id: getId(name) });
    navigate("/");
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
