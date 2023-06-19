import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

const DeleteModal = ({ setDeleteModal, postId, deleteModal }) => {
  const [fadeEffect, setFadeEffect] = useState("");

  const closeModal = () => {
    setFadeEffect("fade-out");
    setTimeout(() => {
      document.body.style.overflow = "visible";
      setDeleteModal(false);
    }, 300);
  };

  const openModal = () => {
    document.querySelector("body").style.overflow = "hidden";
    setFadeEffect("fade-in");
    setDeleteModal(true);
  };

  useEffect(() => {
    if (deleteModal) {
      openModal();
    } else {
      closeModal();
    }
  }, [deleteModal]);

  const handlerDeletePost = async (id) => {
    try {
      await deleteDoc(doc(db, "Users", id));
      setDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="w-full fixed inset-0 z-40 backdrop-blur-sm
      flex justify-center items-center shadow-none"
      >
        <div
          className={`bg-white p-5 rounded-md w-full max-w-[500px] shadow-none ${fadeEffect}`}
        >
          <h2 className="text-center font-medium text-lg">
            Are you sure you want to delete this post?
          </h2>

          <div className="flex items-center space-x-4 pt-3">
            <button
              className="cardButton bg-red-500"
              onClick={(e) => handlerDeletePost(postId)}
            >
              Yes
            </button>

            <button
              className=" cardButton bg-green-500"
              onClick={() => setDeleteModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
