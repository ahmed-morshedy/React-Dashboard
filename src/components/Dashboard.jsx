/* eslint-disable no-unused-vars */
import BlogsTabel from "./Blogs";
import Sidebar from "./SideBAr";
import UsersCard from "./UserCrad";

export default function Dashboard() {
  const username = localStorage.getItem("username");
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <div className="md:w-3/4  p-7 w-full min-h-s">
        <h1 className="text-4xl font-bold mb-7 text-left">
          Welcome {username}
        </h1>
        <UsersCard />
        <BlogsTabel />
      </div>
    </div>
  );
}
