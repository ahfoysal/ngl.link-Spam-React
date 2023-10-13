import supabase from "../config/supbase";
import { toast } from "react-toastify";
import { encodePassword, extractUserName } from "../utils/helper";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddUser = ({ fetchUser }) => {
  const [userName, setUserName] = useState("");
  const [customMessage, setCustomMessage] = useState("");

  const [key, setKey] = useState("");
  const [showCustomMessageButton, setShowCustomMessageButton] = useState(true);
  const [showPasswordButton, setShowPasswordButton] = useState(true);

  const handleAddClick = async () => {
    if (extractUserName(userName) === "pewwdsss_") {
      setUserName("");
      alert("Tor abba ami");
      return (window.location.href =
        "https://www.youtube.com/watch?v=Wt4HPNm-W0c&t=90s");
    }
    const userObject = {
      userName: extractUserName(userName),
      customMessage: customMessage || "r jibone ngl dibi?",
      passKey: encodePassword(key) || encodePassword("nglngl"),
    };

    const { data, error } = await supabase
      .from("users")
      .insert([userObject])
      .select();

    if (data) {
      toast.success("User Added!");
      console.log(data);
      resetInputs();
      fetchUser();
    }

    if (error) {
      toast.error("User already exists");
      console.log(error);
      resetInputs();
    }
  };

  const handleAddCustomMessage = () => {
    setShowCustomMessageButton(false);
  };

  const handleAddPassword = () => {
    setShowPasswordButton(false);
  };

  const resetInputs = () => {
    setUserName("");
    setCustomMessage("");
    setKey("");
  };

  return (
    <div className="">
      <div className="  mt-12 static bg-white rounded-3xl  shadow-md">
        <div className="p-6">
          <h1 className="text-lg font-bold ">send spam messages!</h1>
        </div>
        <div className="px-6 pt-6 bg-[#FA9791] rounded-b-3xl">
          <input
            type="text"
            className="placeholder-slate-600 text-lg font-semibold bg-transparent outline-none resize-none  w-full focus:border-transparent focus:border-none active:border-none border-none hover:border-none focus-visible:border-none"
            placeholder="User Name / NGL Link"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {!showCustomMessageButton && (
            <input
              type="text"
              className="mt-4 mb-4 placeholder-slate-600 text-lg font-semibold bg-transparent outline-none resize-none  w-full focus:border-transparent focus:border-none active:border-none border-none hover:border-none focus-visible:border-none"
              placeholder="Spam Message"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
            />
          )}
          {!showPasswordButton && (
            <input
              type="text"
              className="mb-4 placeholder-slate-600 text-lg font-semibold bg-transparent outline-none resize-none  w-full focus:border-transparent focus:border-none active:border-none border-none hover:border-none focus-visible:border-none"
              placeholder="Password for delete user"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          )}
          <div className="flex gap-2 justify-end py-4  text-xs">
            {showCustomMessageButton && (
              <button
                className=" text-[#111] font-semibold  bg-[#FBB4A9] py-1 px-2 rounded-full"
                onClick={handleAddCustomMessage}
              >
                Add Custom Message
              </button>
            )}
            {showPasswordButton && (
              <button
                className="text-[#111] font-semibold bg-[#FBB4A9]  py-1 px-2 rounded-full"
                onClick={handleAddPassword}
              >
                Add Password
              </button>
            )}
          </div>
        </div>
      </div>
      {userName.trim() !== "" && (
        <button
          className="bg-black w-full py-4 text-white font-bold mt-8 rounded-full"
          onClick={handleAddClick}
        >
          Add!
        </button>
      )}
      {/* <div className="mt-10">
        <h2 className="text-[#FBB4A9] font-semibold text-lg">
          Total Message Sent
        </h2>
      </div> */}
    </div>
  );
};

export default AddUser;
