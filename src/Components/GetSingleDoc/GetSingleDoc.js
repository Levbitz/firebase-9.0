import { getDoc, doc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";

import { db } from "../../Helpers/Firebase/base";

function GetSingleDoc() {
  const [item, setItem] = useState("");

  useEffect(() => {
    const docRef = doc(db, "books", "AqEVIvddK63BGlz1P58r");
    getDoc(docRef).then((doc) => {
      console.log(doc.data().title);
      setItem({
        id: doc.id,
        title: doc.data().title,
        author: doc.data().author,
      });
    });
  }, []);
  //   console.log(item.data.author);
  return (
    <div>
      <h5>{item.title}</h5>
      <p>{item.author}</p>
    </div>
  );
}

export default GetSingleDoc;
