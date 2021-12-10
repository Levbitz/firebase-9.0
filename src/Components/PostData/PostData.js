import React, { useState } from "react";
import { db } from "../../Helpers/Firebase/base";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";

function PostData() {
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setbookAuthor] = useState("");
  const [error, setError] = useState("");
  const colRef = collection(db, "books");
  const [loader, setLoader] = useState(false);
  const addToDB = (e) => {
    setLoader(true);
    //alert("dont hurt me");
    //console.log(`your book is ${bookName} and author is ${bookAuthor}`);
    if (bookName === "" || bookAuthor === "") {
      console.log("fieilds cant be nothing");
      setError("fieilds cant be nothing");
    } else {
      // console.log("good to go");
      // setError("");
      addDoc(colRef, {
        author: bookAuthor,
        title: bookName,
        createdAt: serverTimestamp(),
      })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

      setbookAuthor("");
      setBookName("");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col l6">
          <input
            type="text"
            name="bookName"
            placeholder="title"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <div className="col l6">
          <input
            type="text"
            name="author"
            id=""
            value={bookAuthor}
            placeholder="author"
            onChange={(e) => setbookAuthor(e.target.value)}
          />
        </div>
        <button
          onClick={addToDB}
          className="btn"
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default PostData;
