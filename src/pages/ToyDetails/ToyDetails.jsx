import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    _id,
    toyName,
    sellerName,
    sellerEmail,
    category,
    price,
    rating,
    quantity,
    photo,
    description,
  } = toy;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col justify-center lg:flex-row max-w-5xl">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="text-center">
          <h1 className="text-5xl font-bold lg:text-left my-6">{toyName}</h1>

          <p className="py-2 text-xl font-semibold lg:text-left">
            {" "}
            Seller Name: {sellerName}
          </p>
          <p className="py-2 text-xl font-semibold lg:text-left">
            Seller Email: {sellerEmail}
          </p>
          <p className="py-2 text-xl font-semibold lg:text-left">
            Category: {category}
          </p>
          <p className="py-2 text-xl font-semibold lg:text-left">
            Price: ${price}
          </p>

          <p className="py-2 text-xl font-semibold lg:text-left">
            Available Quantity: {quantity}
          </p>

          
        <div className="flex lg:flex-col justify-center mb-4">
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
          </div>
          <p className="py-2  font-semibold lg:text-left">
            Details: {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
