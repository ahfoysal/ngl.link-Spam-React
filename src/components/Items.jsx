/* eslint-disable react/prop-types */
import { Accordion } from "react-daisyui";
import supabase from "../config/supbase";
import { toast } from "react-toastify";
import { useState } from "react";
import { decodePassword } from "../utils/helper";

const Items = ({ item, fetchUser }) => {
  const [editableUser, setEditableUser] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (user) => {
    setIsEditing(true);
    setEditableUser(user);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditableUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleUpdateClick = async (user) => {
    const userObject = {
      userName: user.userName,
      customMessage: user.customMessage || null, // Set to null if customMessage is empty
    };
    setIsEditing(false);

    const { data, error } = await supabase
      .from("users")
      .update([userObject])
      .eq("id", user.id);
    toast.success("Edited!");
    fetchUser();

    if (data) {
      toast.success("Edited!");
      console.log(data);
      fetchUser();
      setEditableUser(null); // Clear editing mode after successful update
    }

    if (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  const handleDelete = async (user) => {
    // Prompt the user for a passkey
    const passkey = prompt("Enter passkey to delete");

    if (passkey !== "1235" && passkey !== decodePassword(user.passKey)) {
      alert("You are not allowed to delete.");
      return;
    }

    const { data, error } = await supabase
      .from("users")
      .delete()
      .eq("id", user.id);
    toast.success("Deleted!");
    fetchUser();
    if (data) {
      toast.success("Deleted!");
      fetchUser();
    }

    if (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  return (
    <Accordion icon="plus" onClick={() => setIsEditing(false)}>
      <Accordion.Title className="text-xl font-medium">
        {item.userName}
      </Accordion.Title>
      <Accordion.Content className="relative group transition duration-500 ease-out">
        {isEditing ? ( // Render input field if editing this user
          <input
            type="text"
            name="customMessage"
            value={editableUser.customMessage}
            className="outline-none"
            onChange={handleInputChange}
          />
        ) : (
          <p>
            Message:{" "}
            <span className="text-[#205754] font-bold">
              {item.customMessage}
            </span>{" "}
          </p>
        )}
        <div className="absolute right-0 top-0">
          {isEditing ? ( // Render "Update" button in edit mode
            <button
              onClick={() => handleUpdateClick(editableUser)}
              className="py-3 px-4 bg-[#3ff157] h-full text-sm pl-3 pr-1 font-medium rounded-l-xl text-white
            duration-500 translate-x-full group-hover:translate-x-0 ease group-hover:opacity-100"
            >
              Update
            </button>
          ) : (
            <button
              onClick={() => handleEditClick(item)} // Trigger edit mode
              className="py-3 px-4 bg-[#3ff157] h-full text-sm pl-3 pr-1 font-medium rounded-l-xl text-white
          duration-500 translate-x-full group-hover:translate-x-0 ease group-hover:opacity-100 "
            >
              Edit
            </button>
          )}
          {isEditing ? (
            <button
              onClick={() => setIsEditing(false)}
              className="py-3 bg-[#FD4449] h-full text-sm pl-3 pr-1 font-medium text-white
    duration-500 translate-x-full group-hover:translate-x-0 ease group-hover:opacity-100 opacity-0"
            >
              Cancel
            </button>
          ) : (
            <button
              onClick={() => handleDelete(item)}
              className="py-3 bg-[#FD4449] h-full text-sm pl-3 pr-1 font-medium text-white
        duration-500 translate-x-full group-hover:translate-x-0 ease group-hover:opacity-100 opacity-0"
            >
              Delete
            </button>
          )}
        </div>
      </Accordion.Content>
    </Accordion>
    // <div
    //   className="collapse collapse-plus "
    //   onClick={() => setIsEditing(false)}
    // >
    //   <input type="radio" name="my-accordion-3" checked="checked" />
    //   <div className="collapse-title text-xl font-medium">
    //     Click to open this one and close others
    //   </div>
    //   <div className="collapse-content">
    //     <p>hello</p>
    //   </div>
    // </div>
  );
};

export default Items;
