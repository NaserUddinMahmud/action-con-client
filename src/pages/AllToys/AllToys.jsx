import TdToys from "./TdToys";
import { useEffect, useState } from "react";


const AllToys = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await fetch('https://assignment-11-action-con-server.vercel.app/toys'); 
            const jsonData = await response.json();
            setIsLoading(false)
            setToys(jsonData); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div className="py-4 mx-10">
            <h2 className="text-3xl font-bold text-center py-5">All Toys: {toys.length}</h2>
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
      {isLoading ? <div ><progress className="progress w-56 "></progress></div> :toys.map(toy=><TdToys
      key={toy._id}
      toy={toy}
      ></TdToys>)}
      
      
    </tbody>
   
   
    
  </table>
</div>
        </div>
    );
};

export default AllToys;