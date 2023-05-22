import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    
    const [error, setError] = useState("");

    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password);

    setError("");
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, {replace:true});
        updateUserData(user, name,photo);
        navigate(from, {replace:true});
        Swal.fire({
            icon: "success",
            title: "Registration Successful!"
          });
    })
    .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };


  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, {replace:true});
      Swal.fire({
        icon: "success",
        title: "Registration Successful!"
      });
  })
  .catch((error) => {
    console.log(error.message);
    setError(error.message);
  });
  }

  const updateUserData = (user, name, photo) =>{
    updateProfile(user,{
      displayName: name , photoURL: photo
    })
    .then(() =>{
      console.log('user profile updated')
    })
    .catch(error=>{
      setError(error.message)
    })
  }

  return (
    <div>
        <Helmet>
        <title>ActionCon | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div>
            <h1 className="text-5xl font-bold">Please Register !</h1>
          </div>
          <div className="card w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' className="file-input file-input-ghost file-input-bordered w-full max-w-xs px-5" />
        </div>
                  <label className="label"></label>
                </div>
                <p className='text-red-600 '>{error}</p>
                <div className="form-control mt-2">
                  <button className="btn btn-error">Register</button>
                </div>
              </div>
            </form>
            
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error mb-6 mx-8">
              {" "}
              <FaGoogle /> <span className="pl-2">Login with Google</span>
            </button>

            <p className="text-red-600 px-5"></p>
            <p className="px-10 pb-10">
              Already have an account?{" "}
              <Link to="/login" className=" btn-link">
                Please Login!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
