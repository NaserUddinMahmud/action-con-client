import TdToys from "./TdToys";
import { useEffect, useState } from "react";


const AllToys = () => {
    
    const [toys, setToys] = useState([]);
    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await fetch('https://assignment-11-action-con-server.vercel.app/toys'); 
            const jsonData = await response.json();
            setToys(jsonData); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div className="py-4">
            <h2 className="text-3xl font-bold text-center py-5">All toys</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead className="bg-base-300 ">
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {toys.map(toy=><TdToys
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