import React, { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";
import { useDispatch } from "react-redux";
import { editForm } from "../../features/editFormSlice";
import UpdateModal from "../Modal/UpdateModal";

const Cards = ({ item }) => {
  const dispatch = useDispatch();
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const handlerDelete = () => {
    setDeleteModal(!deleteModal);
  };

  const handlerEditForm = () => {
    setEditModal(true);
    dispatch(
      editForm({
        id: item.id,
        name: item.userName,
        email: item.userEmail,
        phone: item.userNumber,
        address: item.userAddress,
        type: true,
      })
    );
  };

  return (
    <>
      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          postId={item.id}
          deleteModal={deleteModal}
        />
      )}
      {editModal && <UpdateModal setEditModal={setEditModal} item={item} />}
      <div className="bg-white w-full md:max-w-md p-4 shadow-md rounded mt-4 md:m-2">
        <div className="">
          <h1 className="text-center font-medium text-lg">User Details</h1>
        </div>

        <div>
          <h2>
            Name :- <span className="font-medium">{item?.userName}</span>
          </h2>
          <h2>
            Email:- <span className="font-medium">{item?.userEmail}</span>
          </h2>
          <h2>
            Phone :- <span className="font-medium">{item?.userNumber}</span>
          </h2>
        </div>

        <div className="flex justify-between items-center space-x-5 pt-2">
          <button className="cardButton bg-green-500" onClick={handlerEditForm}>
            Edit
          </button>

          <button className="cardButton bg-red-500" onClick={handlerDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
