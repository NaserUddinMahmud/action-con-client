import { Helmet } from "react-helmet";
import AllToysRow from "./AllToysRow";
import { useEffect, useRef, useState } from "react";

const AllToys = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toys, setToys] = useState([]);
  const searchRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://assignment-11-action-con-server.vercel.app/toys?limit${20}&search=${searchQuery}`
        );
        const jsonData = await response.json();
        setIsLoading(false);
        setToys(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearchQuery(searchRef.current.value);
  };

  return (
    <div className="py-4 mx-10">
      <Helmet>
        <title>ActionCon | All Toys</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center py-5">All Toys </h2>

      <div className="flex justify-center py-4">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-error"
              ref={searchRef}
            />
            <button onClick={handleSearch} className="btn btn-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-base-300 ">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {isLoading ? (
              <div>
                <progress className="progress w-56 "></progress>
              </div>
            ) : (
              toys.map((toy) => (
                <AllToysRow key={toy._id} toy={toy}></AllToysRow>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
