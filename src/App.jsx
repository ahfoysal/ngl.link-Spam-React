import List from "./components/List";
import AddUser from "./components/AddUser";
import { useEffect, useState } from "react";
import supabase from "./config/supbase";

function App() {
  const [errors, setErrors] = useState(null);
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    let { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.log(error);
      setUsers(null);
    }
    if (data) {
      setErrors(null);
      setUsers(data);
      console.log(data);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <main className="text-stone-900 py-10 w-[93%] container mx-auto">
      <div className="flex justify-center items-center">
        <img
          className="max-w-full w-[60px] mr-2"
          src="https://assets.website-files.com/62a6e19b906fa55f541799d7/62a6e2da4349165183f83d89_ngl_icon.png"
          alt=""
        />
        {"    "}
        <h2 className=" text-2xl md:text-3xl text-stroke-1	 text-white font-bold">
          CDI
        </h2>
      </div>
      <h2 className=" text-center text-base 	 text-white  italic">
        By{" "}
        <a
          className="text-[#4baff1]"
          href="https://www.instagram.com/not_pewdss_/"
        >
          Pewds
        </a>
      </h2>

      <div className="flex gap-12 flex-col md:flex-row ">
        <div className="course-container w-full md:w-[50%] mx-auto">
          <AddUser fetchUser={fetchUser} />
        </div>
        <div className="list-container w-full md:w-[40%] relative mx-auto">
          <List users={users} errors={errors} fetchUser={fetchUser} />
        </div>
      </div>
    </main>
  );
}

export default App;
