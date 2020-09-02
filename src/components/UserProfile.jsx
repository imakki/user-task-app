import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
const axios = require("axios");

const UserProfile = () => {
  const { id } = useParams();

  const userData = useQuery(
    "user",
    () =>
      axios.get(`https://reqres.in/api/users/${id}`).then((res) => res.data),
    { refetchOnWindowFocus: false }
  );

  console.log(userData);
  console.log(id);
  return (
    <div>
      <Link to="/">Home</Link>
      {userData.isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="bg-white overflow-hidden shadow rounded-lg w-1/2 m-auto h-full">
          <div className="border-b flex items-center border-gray-200 px-4 py-5 sm:px-6">
            <img
              class="inline-block h-12 w-12 rounded-full"
              src={userData.data.data.avatar}
              alt=""
            />{" "}
            <span className="ml-2 text-lg">
              {userData.data.data.first_name}
            </span>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p>
              <span>FirstName : {userData.data.data.first_name}</span>
            </p>
            <p>
              <span>LastName : {userData.data.data.last_name}</span>
            </p>
            <p>
              <span>Email : {userData.data.data.email}</span>
            </p>
            <p>
              <span>Company : {userData.data.ad.company}</span>
            </p>
            <p>
              <Link to={userData.data.ad.url}>{userData.data.ad.url}</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
