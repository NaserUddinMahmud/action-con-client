import { Link } from "react-router-dom";

const TdToys = ({ toy }) => {
  const { _id, toyName, sellerName, category, price, quantity, photo } = toy;
  return (
    <tr>
     
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded-xl w-16 h-16">
              {photo && <img src={photo} alt="toy photo" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">{category}</div>
          </div>
        </div>
      </td>
      <td>
        Available Quantity: {quantity}
        <br />
        <span className="badge badge-ghost badge-sm">{sellerName}</span>
      </td>
      <td>${price}</td>
      <th>
      <Link to={`/toysDetail/${_id}`}><button className="btn btn-error btn-xs">details</button></Link>
      
        
      </th>
    </tr>
  );
};

export default TdToys;
