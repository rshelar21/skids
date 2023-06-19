import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { selectUser } from "../../features/editFormSlice";

const UpdateModal = ({ setEditModal }) => {
  const editUser = useSelector(selectUser);
  const [updateForm, setUpdateForm] = useState({
    userName: editUser?.name,
    userEmail: editUser?.email,
    userAddress: editUser?.address,
    userNumber: editUser?.phone,
  });
  const [fadeEffect, setFadeEffect] = useState("");

  const closeModal = () => {
    setFadeEffect("fade-out");
    setTimeout(() => {
      document.body.style.overflow = "visible";
      setEditModal(false);
    }, 300);
  };

  const openModal = () => {
    document.querySelector("body").style.overflow = "hidden";
    setFadeEffect("fade-in");
    setEditModal(true);
  };

  useEffect(() => {
    if (editUser) {
      openModal();
    } else {
      closeModal();
    }
  }, [editUser]);

  const handlerCloseModal = () => {
    setEditModal(false);
  };

  const handlerSubmitTask = async (e) => {
    e.preventDefault();
    try {
      if (
        editUser.userName === " " ||
        editUser.userPassword === " " ||
        editUser.userEmail === " " ||
        editUser.userAddress === " " ||
        editUser.userNumber === " "
      ) {
        alert("Please fill all the fields");
        return;
      }
      const docRef = doc(db, "Users", editUser?.id);
      await updateDoc(docRef, {
        ...updateForm,
      });
      setEditModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    if (name === "userNumber" && value.length > 10) {
      return;
    }
    setUpdateForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="w-full fixed inset-0 z-50 backdrop-blur-sm bg-gray-50 bg-opacity-40 flex justify-center items-center">
        <div
          className={`bg-white p-4 rounded-md w-full max-w-lg shadow-xl ${fadeEffect}`}
        >
          <div className="flex justify-end" onClick={handlerCloseModal}>
            <XMarkIcon className="hover:bg-gray-300 icon" />
          </div>

          <div>
            <h1 className="text-center font-medium text-lg">Update Task</h1>
          </div>
          <form
            className="flex flex-col relative w-full"
            onSubmit={handlerSubmitTask}
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="input mb-6"
              name="userName"
              value={updateForm.userName}
              onChange={handlerChange}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="input mb-6"
              name="userEmail"
              value={updateForm.userEmail}
              onChange={handlerChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <input
              type="text"
              placeholder="Enter your address"
              className="input mb-6"
              name="userAddress"
              value={updateForm.userAddress}
              onChange={handlerChange}
              required
            />

            <input
              type="number"
              placeholder="Enter your phone number"
              className="input"
              name="userNumber"
              value={updateForm.userNumber}
              onChange={handlerChange}
              required
            />

            <button className="button" type="submit">
              Update Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
