import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { db } from "./Helpers/Firebase/base";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "@firebase/firestore";
import WriterEffect from "./Components/WriterEffect/WriterEffect";
import GetSingleDoc from "./Components/GetSingleDoc/GetSingleDoc";
import PostData from "./Components/PostData/PostData";
import SigningUp from "./Components/SingingUp/SigningUp";
import Login from "./Components/Login/Login";

function App() {
  const [results, setResults] = useState([]);

  const [error, setError] = useState("");
  const colRef = collection(db, "books");

  const q = query(
    colRef,
    where("author", "==", "samuel"),
    orderBy("createdAt", "desc")
  );

  useEffect(() => {
    // effect
    getDocs(q).then((snapshoot) => {
      // console.log(snapshoot.docs);
      setResults(
        snapshoot.docs.map((doc) =>
          // console.log(doc.data())
          ({
            id: doc.id,
            data: doc.data(),
          })
        )
      );
    });
    // return () => {
    //   cleanup
    // };
  }, [q]);

  // useEffect(() => {
  //   onSnapshot(colRef, (snapshoot) => {
  //     setResults(
  //       snapshoot.docs.map((doc) =>
  //         // console.log(doc.data())
  //         ({
  //           id: doc.id,
  //           data: doc.data(),
  //         })
  //       )
  //     );
  //   });
  //   // return () => {
  //   //   cleanup
  //   // }
  // });

  return (
    <div>
      <SigningUp />

      <hr />
      <Login />
      <Navbar />
      <div className="container">
        <WriterEffect />
        <h3 className="center">Firebase Nine By Levbitz</h3>
        <p>sam</p>
        <h2 className="red-text">{error}</h2>

        <div className="row">
          {results.map((result) => {
            const {
              id,
              data: { title, author },
            } = result;
            return (
              <div className="col l6 s12" key={id}>
                <div className="lb_book_wrap">
                  <h4>{title}</h4>
                  <h6>{author}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <GetSingleDoc />

      <PostData />
    </div>
  );
}

export default App;

// Dear Job Seeker,

// We at REDOBA CONSTRUCTIONS COMPANY CANADA intend to invite experienced Individuals/Expatriates or Consultancy firm, who skills are capable of rendering expertise services in various fields positions and departments, including Engineers, Administration, Human Resources, Medical, Health and safety and all other vacant positions.
// All interested applicants should apply to this email bellow:

// (Email : career@redobaconstructions.com)

// Yours Sincerely,
// Mr Manuel Donavans
// Human Resources Manager(HR)
// 120
