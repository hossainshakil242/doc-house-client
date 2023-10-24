import { Link } from "react-router-dom";
import pic from '../../assets/login.png';

const Signup = () => {
    return (
        <div>
            <div className="hero min-h-screen shadow-lg bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={pic} className='rounded-lg' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-2xl pt-8 font-bold text-center'>Sign up to Doc House</h2>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="email" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Username</span>
                                </label>
                                <input type="email" placeholder="Enter your username" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                    <a href="#" className="label-text-alt text-red-600">Forgot password?</a>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white btn-info">Create Account</button>
                            </div>
                            <label className="label">
                                <p className="text-sm text-center">
                                    Already registered? Go to <Link to='/login' className="text-red-600 font-semibold">SIGN IN</Link>
                                </p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;