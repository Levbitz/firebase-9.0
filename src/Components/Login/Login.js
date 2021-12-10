import { signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../Helpers/Firebase/base";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const loginHandler = () => {
    signInWithEmailAndPassword(auth, name, password)
      .then((cred) => {
        //   setUser(cred.user)
        console.log(cred.user.email);
        //   console.log(cred.user)
        setUser(cred.user.email);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        console.log("changed");
      },
      [""]
    );
  });
  return (
    <div>
      <h1>Login</h1>
      <p>user is {user}</p>
      <div className="container">
        <div className="row">
          <div className="col l6">
            <input
              type="email"
              placeholder="title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col l6">
            <input
              type="password"
              id=""
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={loginHandler} className="btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
