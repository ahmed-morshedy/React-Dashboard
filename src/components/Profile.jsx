/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Profile() {
  let { Id } = useParams();
  const api_url = "https://dummyjson.com/users";

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`${api_url}/${Id}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [Id]);

  console.log(profile);
  return (
    <>
      {profile.length === 0 ? (
        <h1 className=" m-8 pt-10">Ooops , Can&apos;t Get Profile Data</h1>
      ) : (
        <div className=" mt-7 mb-7 flex flex-col justify-center items-center ">
          {/* <h1>Profile</h1> */}
          <div className="flex flex-col items-center">
            <div className=" rounded-full mt-5 p-3 border border-emerald-500">
              <img src={profile.image} alt="" />
            </div>
            <table className=" table mt-12 border border-emerald-500">
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
                  <td>{profile.address.country}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td>{profile.company.name}</td>
                </tr>
                <tr>
                  <td>Department</td>
                  <td>{profile.company.department}</td>
                </tr>
                <tr>
                  <td>Jop title</td>
                  <td>{profile.company.title}</td>
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
