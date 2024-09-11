/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

function Profile() {
  let { Id } = useParams();
  const api_url = "https://dummyjson.com/users";

  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch(`${api_url}/${Id}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, [Id]);

  return (
    <>
      {!profile.id ? (
        <h1 className="m-8 pt-10">Ooops, Can&apos;t Get Profile Data</h1>
      ) : (
        <div className="mt-7 mb-7 pl-2 pr-2 container">
          <div className="arrow-icon">
            <Link to={"/user"}>
              <ArrowUturnLeftIcon className="w-6 h-6 text-blue-500 cursor-pointer" />
            </Link>
          </div>
          <div className="rounded-full mt-5 p-3 0 flex flex-col justify-center items-center">
            <img
              src={profile.image}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="border-2 border-cyan-600"
            />
          </div>
          <div className="rounded-lg  mt-12 overflow-x-auto ">
            <table className=" min-w-full w-full profile border-cyan-600 border shadow ">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    {profile.firstName} {profile.lastName}
                  </td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{profile.age}</td>
                </tr>
                <tr>
                  <td>Id</td>
                  <td>{profile.id}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{profile.email}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{profile.address?.country}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td>{profile.company?.name}</td>
                </tr>
                <tr>
                  <td>Department</td>
                  <td>{profile.company?.department}</td>
                </tr>
                <tr>
                  <td>Job title</td>
                  <td>{profile.company?.title}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
