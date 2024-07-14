import {
  ArrowPathRoundedSquareIcon,
  PencilIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

/* eslint-disable no-unused-vars */
export default function UsersCard() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="user-tabel">
        <div className="bg-indigo-600 rounded p-3">
          <UserGroupIcon className="text-white h-6 w-6" />
        </div>
        <div className="mx-4">
          <h4 className="text-2xl font-semibold text-gray-700">100</h4>
          <p className="text-gray-500 ">All Users</p>
        </div>
      </div>

      <div className="user-tabel">
        <div className="bg-indigo-600 rounded p-3">
          <PencilIcon className="text-white h-6 w-6" />
        </div>
        <div className="mx-4">
          <h4 className="text-2xl font-semibold text-gray-700">30</h4>
          <p className="text-gray-500 ">All Blogs</p>
        </div>
      </div>

      <div className="user-tabel">
        <div className="bg-indigo-600 rounded p-3">
          <ArrowPathRoundedSquareIcon className="text-white h-6 w-6" />
        </div>
        <div className="mx-4">
          <h4 className="text-2xl font-semibold text-gray-700">1000</h4>
          <p className="text-gray-500 ">All Transactions</p>
        </div>
      </div>
    </div>
  );
}
