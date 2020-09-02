import React from "react";
import { Link } from "react-router-dom";

function UserCard(props) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {props.userData.map((user) => (
        <li
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow"
          key={user.id}
        >
          <Link to={`/${user.id}`}>
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                src={user.avatar}
                alt="userPicture"
              />
              <h3 className="mt-6 text-gray-900 text-sm leading-5 font-medium">
                <span>{user.first_name}</span> <span>{user.last_name}</span>
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-gray-500 text-sm leading-5">
                  {user.email}
                </dd>
              </dl>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UserCard;
