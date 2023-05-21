import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [toys, setToys] = useState([]);
  console.log("mytoys", user);

  const url = `https://assignment-11-action-con-server.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsLoading(false);
      });
  }, []);

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
              const remaining = toys.filter(toy => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="py-4 mx-20">
      <h2 className="text-3xl font-bold text-center py-5">
        My Toys: {toys.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-base-300 ">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>View Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {isLoading ? (
              <div>
                <progress className="progress w-56 "></progress>
              </div>
            ) : (
              toys.map((toy) => <MyToysRow key={toy._id} toy={toy} handleDelete={handleDelete}></MyToysRow>)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
