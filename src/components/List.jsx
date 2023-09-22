/* eslint-disable react/prop-types */

import Items from "./Items";

const List = ({ users, errors, fetchUser }) => {
  return (
    <div className="p-4 md:sticky top-24 mt-12 static max-j-[800px]   bg-white rounded-xl  shadow-md">
      <h1 className="text-xl font-bold mb-4">Added Users</h1>
      <ul className="my-3 text-hero-gray  overflow-y-scroll">
        {users.length <= 0 && <li className="  mt-2  ">No Users Found!</li>}
        {errors && <li className="  mt-2  ">{errors}</li>}

        {users.map((item, idx) => (
          <Items key={idx} item={item} fetchUser={fetchUser} />
        ))}
      </ul>{" "}
    </div>
  );
};

export default List;
