import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAToy = () => {
  const toy = useLoaderData();
  const { _id, toyName, description, price, quantity } = toy;

  const navigate = useNavigate();

  console.log(location);
  const from = "/myToys";

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;

    const quantity = form.quantity.value;

    const description = form.description.value;

    const updatedToy = {
      price,

      quantity,

      description,
    };

    console.log(updatedToy);

    fetch(`https://assignment-11-action-con-server.vercel.app/toys/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          navigate(from, { replace: true });
          Swal.fire({
            title: "Success!",
            text: "Your toy is updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="bg-base-200 px-24 py-8">
      <Helmet>
        <title>ActionCon | Update Toy</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-5">
        Update Toy: {toyName}
      </h2>
      <hr />
      <form onSubmit={handleUpdateToy}>
        {/* row */}
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="price"
              className="input input-bordered w-full"
            />
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
              defaultValue={quantity}
              placeholder="available quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* row */}
        <div className="md:flex justify-center gap-10 mb-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              type="text"
              name="description"
              defaultValue={description}
              placeholder="detail description"
              className="textarea textarea-bordered w-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Update toy"
            className="btn btn-wide btn-error font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateAToy;
