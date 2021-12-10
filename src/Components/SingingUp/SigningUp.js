import { createUserWithEmailAndPassword, signOut } from "@firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Helpers/Firebase/base";

function SigningUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, name, password).then((cred) => {
      //   setUser(cred.user)
      console.log(cred.user.email);
      //   console.log(cred.user)
      setUser(cred.user.email);
    });
  };

  const logoutHandler = () => {
    signOut(auth).then(() => {
      window.location.reload();
    });
  };
  return (
    <div>
      <button className="btn" onClick={logoutHandler}>
        log out
      </button>
      <h1>create account</h1>
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
          <button onClick={signUp} className="btn">
            sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SigningUp;
