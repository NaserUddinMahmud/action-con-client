const TdToys = ({ toy }) => {
  const { toyName, sellerName, category, price, quantity, photo } = toy;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded-xl w-16 h-16">
              <img src={photo} alt="toy photo" />
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
        <button className="btn btn-error btn-xs">details</button>
      </th>
    </tr>
  );
};

export default TdToys;
