const AddAToy = () => {

    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const newToy = {toyName, sellerName, sellerEmail, category, price, rating, quantity, photo, description}

        console.log(newToy);

        fetch('http://localhost:5000/toys',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
  return (
    <div className="bg-base-200 p-24">
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
              placeholder="email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="category"
              className="input input-bordered w-full"
            />
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
            <label className="label">
              <span className="label-text font-medium">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="rating"
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
        <input type="submit" value="Add toy" className="btn btn-wide btn-error font-bold" />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
