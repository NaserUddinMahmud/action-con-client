import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div>
            <h1 className="text-5xl font-bold">Please Login !</h1>
          </div>
          <div className="card w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-error">Login</button>
                </div>
              </div>
            </form>
            <button onClick="" className="btn btn-outline btn-error mx-8">
              {" "}
              <FaGoogle /> <span className="pl-2">Login with Google</span>
            </button>
            <button onClick="" className="btn btn-outline btn-error mx-8 my-4">
              <FaGithub />
              <span className="pl-2">Login with Github</span>
            </button>
            <p className="text-red-600 px-5"></p>
            <p className="px-5 pb-10">
              New to ActionCon?{" "}
              <Link to="/register" className=" btn-link">
                {" "}
                Please register!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;