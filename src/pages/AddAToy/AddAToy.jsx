import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import { Helmet } from "react-helmet";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("Marvel");
  const [selectedRating, setSelectedRating] = useState("5");
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category = selectedCategory;
    const price = parseFloat(form.price.value);
    const rating = selectedRating;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const newToy = {
      toyName,
      sellerName,
      sellerEmail,
      category,
      price,
      rating,
      quantity,
      photo,
      description,
    };

    console.log(newToy);

    fetch("https://assignment-11-action-con-server.vercel.app/addAToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your toy is added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  return (
    <div className="bg-base-200 px-24 py-8">
        <Helmet>
        <title>ActionCon | Add A Toy</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-5">Add a Toy</h2>
      <hr />
      <form onSubmit={handleAddToy}>
        {/* row */}
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              placeholder="toy name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Seller</span>
            </label>
            <input
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              placeholder="seller name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* row */}
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="text"
              name="sellerEmail"
              value={user?.email}
              placeholder="email"
              className="input input-bordered w-full"
              readOnly
            />
          </div>
          <div className="form-control md:w-1/2">
          <label className="label" htmlFor="dropdown">
            <span className="label-text font-medium">Category</span>
          </label>
          <select
            className="input input-bordered w-full"
            id="dropdown"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
            <option value="Star-Wars">Star-Wars</option>
          </select>
        </div>
        </div>

       

        {/* row */}
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
          <label className="label" htmlFor="dropdown">
            <span className="label-text font-medium">Rating</span>
          </label>
          <select
            className="input input-bordered w-full"
            id="dropdown"
            value={selectedRating}
            onChange={handleRatingChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            
          </select>
        </div>
        </div>
        {/* row */}
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Available quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="available quantity"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* row */}
        <div className="md:flex justify-center gap-10 mb-10">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="detail description"
              className="textarea textarea-bordered w-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Add toy"
            className="btn btn-wide btn-error font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
