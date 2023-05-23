import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [toys, setToys] = useState([]);
  

  const url = `https://assignment-11-action-con-server.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsLoading(false);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-action-con-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  const handleSortOrderChange = (event) => {
    const sortOrder = event.target.value;
    sortToys(sortOrder);
  };

  const sortToys = (sortOrder) => {
    fetch(`https://assignment-11-action-con-server.vercel.app/myToys?email=${user?.email}&sortOrder=${sortOrder}`)
      .then((response) => response.json())
      .then((sortedToys) => {
        setToys(sortedToys);
      })
      .catch((error) => {
        console.error('Error sorting toys:', error);
      });
  };

  return (
    <div className="py-4 mx-10">
      <Helmet>
        <title>ActionCon | My Toys</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center py-5">My Toys </h2>

      <div className="flex justify-center gap-4 my-4">
      <label className="label" htmlFor="dropdown">
            <span className="label-text font-medium">Sort by Price</span>
          </label>
        <select
          className="input input-bordered input-error w-full max-w-xs"
          onClick={handleSortOrderChange}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-base-300 ">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Update Toy</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {isLoading ? (
              <progress className="progress w-56 "></progress>
            ) : (
              toys.map((toy) => (
                <MyToysRow
                  key={toy._id}
                  toy={toy}
                  handleDelete={handleDelete}
                ></MyToysRow>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
