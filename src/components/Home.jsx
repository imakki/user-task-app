import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import UserCard from "./UserCard";

const axios = require("axios");

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const queryInfo = useQuery(
    ["users", { pageNumber }],
    () =>
      axios
        .get("https://reqres.in/api/users", {
          params: {
            per_page: 6,
            page: pageNumber,
          },
        })
        .then((res) => res.data),
    { refetchOnWindowFocus: false }
  );
  console.log(queryInfo);

  return (
    <div>
      <div className="flex justify-center mb-4">
        <div className="mt-1 relative rounded-md shadow-sm mr-2">
          <input
            className="form-input p-4 block w-full sm:text-lg sm:leading-5"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="FirstName"
          />
        </div>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            className="form-input p-4 block w-full sm:text-lg sm:leading-5"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="LastName"
          />
        </div>
      </div>
      {queryInfo.isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <h1>{queryInfo.isFetching ? <small>...</small> : null} </h1>
          <UserCard userData={queryInfo.data.data} />
          <br />
        </>
      )}
      <div className="text-center">
        <button
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          onClick={() => setPageNumber((old) => old - 1)}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        {"  "}
        <button
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          onClick={() => setPageNumber((old) => old + 1)}
          disabled={pageNumber === 2}
        >
          Next
        </button>{" "}
        <span>
          Current Page: {pageNumber}
          {queryInfo.isFetching ? "..." : " "}
        </span>
      </div>
    </div>
  );

  //   return queryInfo.isLoading ? (
  //     "Loading..."
  //   ) : queryInfo.isError ? (
  //     queryInfo.error.message
  //   ) : (
  //     <>
  //       <h3>Users {queryInfo.isFetching ? <small>...</small> : null} </h3>
  //       <ul>
  //         {queryInfo.data.data.map((user) => {
  //           <li key={user.id}>{user.first_name}</li>
  //         })}
  //       </ul>
  //       <button onClick={() => setPage((old) => old - 1)}>Previous</button>
  //       {"  "}
  //       <button onClick={() => setPage((old) => old + 1)}>Next</button>
  //       <span>
  //         Current Page: {page + 1}
  //         {queryInfo.isFetching ? "..." : " "}
  //       </span>
  //     </>
  //   );
};

export default Home;
