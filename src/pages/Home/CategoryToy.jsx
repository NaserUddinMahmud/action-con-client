import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.error('You have to log in first to view details');

const CategoryToy = ({toy}) => {
   
    const {_id, toyName, price, rating, photo } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="toy photo" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{toyName}</h2>
    <p>${price}</p>
    <div>
    <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
    </div>
    <div className="card-actions"><Link to={`/toysDetail/${_id}`}><button onClick={notify} className="btn btn-error">View Details</button><Toaster /></Link> 
  
      
    </div>
  </div>
</div>
  );
};

export default CategoryToy;
