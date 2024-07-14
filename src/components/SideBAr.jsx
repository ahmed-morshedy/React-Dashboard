/* eslint-disable no-unused-vars */
import {
  MagnifyingGlassIcon,
  HomeIcon,
  DocumentIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <button
        className={`text-4xl absolute  z-10  top-64 bg-white rounded-full p-1  border-indigo-600 border md:hidden ${
          showSidebar ? "right-1" : " left-0"
        }`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? (
          <ChevronDoubleLeftIcon className="w-10 h-10 text-black" />
        ) : (
          <ChevronDoubleRightIcon className="w-10 h-10 text-black" />
        )}
      </button>
      <div className="relative md:w-1/4">
        <div
          className={`fixed bg-indigo-600 top-0 left-0 p-7 h-full duration-700 w-full md:w-1/4 ease-in-out ${
            showSidebar
              ? " translate-x-0"
              : "-translate-x-full   md:translate-x-0 "
          }`}
        >
          <p className="text-white my-4 text-2xl font-bold">Admin Dashboard</p>
          <ul>
            <li>
              <div className="relative">
                <button className=" left-0 inset-y-0 px-3 absolute">
                  <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
                </button>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="px-5 w-full rounded shadow focus:outline-0 h-9  pl-9"
                  placeholder="Search..."
                />
              </div>
            </li>
            <a href="#">
              <li className="sidebar-item">
                <HomeIcon className="sidebar-icon" />
                Home
              </li>
            </a>
            <a href="#">
              <li className="sidebar-item bg-black">
                <DocumentIcon className="sidebar-icon" />
                Blogs
              </li>
            </a>
            <a href="#">
              <li className="sidebar-item">
                <DocumentTextIcon className="sidebar-icon" />
                Reports
              </li>
            </a>
            <a href="#">
              <li className="sidebar-item">
                <EnvelopeIcon className="sidebar-icon" />
                Inbox
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
