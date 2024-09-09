import { useEffect, useState } from "react";
import man from "../assets/team-01.png";
import woman from "../assets/team-05.png";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function BlogsTabel() {
  const api_url = "https://dummyjson.com/users";

  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  console.log(users);
  return (
    <div className=" border-b border-gray-200 shadow rounded-lg my-6 overflow-x-auto">
      <table className=" overflow-x-scroll min-w-full ">
        {users.length > 0 ? (
          <>
            <thead>
              <tr>
                <td className="td">Name</td>
                <td className="td">Email</td>
                <td className="td"> Role</td>
                <td className="td">Edit</td>
                <td className="td">Delete</td>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users.map((user) => {
                return (
                  <tr key={user.id} className="border-b">
                    <td>
                      <Link to={`/profile/${user.id}`}>
                        <div className="flex items-center ">
                          {user.gender == "female" ? (
                            <img
                              src={woman}
                              alt="image"
                              className="w-10 h-10 rounded-full mr-3"
                            />
                          ) : (
                            <img
                              src={man}
                              alt="image"
                              className="w-10 h-10 rounded-full mr-3"
                            />
                          )}
                          <p className="text-sm text-gray-900 font-medium">
                            {user.firstName} {user.lastName}
                          </p>
                        </div>
                      </Link>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <PencilSquareIcon className="w-6 h-6 text-blue-500 cursor-pointer" />
                    </td>
                    <td>
                      <TrashIcon className="w-6 h-6 text-red-600 cursor-pointer" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </>
        ) : (
          <h1>Loading ....</h1>
        )}
      </table>
    </div>
  );
}

export default BlogsTabel;
