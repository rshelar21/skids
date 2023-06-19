import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  userName: "",
  userEmail: "",
  userAddress: "",
  userNumber: "",
};

const UserForm = () => {
  const [userForm, setUserForm] = useState({
    initialState,
  });

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        userForm.userName === " " ||
        userForm.userPassword === " " ||
        userForm.userEmail === " " ||
        userForm.userAddress === " " ||
        userForm.userNumber === " "
      ) {
        alert("Please fill all the fields");
        return;
      }
      const docRef = await addDoc(collection(db, "Users"), {
        ...userForm,
        createdAt: serverTimestamp(),
      });
      setUserForm(initialState);
    } catch (error) {
      console.error("adding document: ", error);
    }
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;

    if (name === "userNumber" && value.length > 10) {
      return;
    }
    setUserForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="w-full md:max-w-[500px] p-4 px-6 bg-white rounded h-full max-h-full mt-2">
        <h1 className="text-center text-lg font-medium">Create User</h1>
        <div className="pt-4">
          <form
            className="flex flex-col relative w-full"
            onSubmit={handlerSubmit}
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="input mb-6"
              name="userName"
              value={userForm.userName}
              onChange={handlerChange}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="input mb-6"
              name="userEmail"
              value={userForm.userEmail}
              onChange={handlerChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <input
              type="text"
              placeholder="Enter your address"
              className="input mb-6"
              name="userAddress"
              value={userForm.userAddress}
              onChange={handlerChange}
              required
            />

            <input
              type="number"
              placeholder="Enter your phone number"
              className="input"
              name="userNumber"
              value={userForm.userNumber}
              onChange={handlerChange}
              required
            />

            <button className="button" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
