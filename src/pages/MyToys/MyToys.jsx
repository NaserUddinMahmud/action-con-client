import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const[toys, setToys] = useState([]);
    console.log('mytoys',user);

    const url = `https://assignment-11-action-con-server.vercel.app/myToys?email=${user?.email}`;
    useEffect(()=>{
        
        fetch(url)
        .then(res => res.json())
        .then(data =>{setToys(data)
            setIsLoading(false)})
    }, [])
    return (
        
        <div className="py-4">
        <h2 className="text-3xl font-bold text-center py-5">My Toys: {toys.length}</h2>
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
  {isLoading ? <div ><progress className="progress w-56 "></progress></div> :toys.map(toy=><MyToysRow
  key={toy._id}
  toy={toy}
  ></MyToysRow>)}
  
  
</tbody>



</table>
</div>
    </div>
    );
};

export default MyToys;