import React, { useState, useEffect } from "react";
import Cards from "./Cards/Cards";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const DisplayCards = () => {
  const [postData, setPostsData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const queryRef = query(collection(db, "Users"), orderBy("createdAt", "desc"));
  const getData = async () => {
    const docRef = await onSnapshot(queryRef, (querySnapshot) => {
      setPostsData(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="flex w-full flex-wrap">
          {postData.map((item, index) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayCards;
