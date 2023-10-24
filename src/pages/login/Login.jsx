import { Link } from 'react-router-dom';
import pic from '../../assets/login.png';

const Login = () => {

    return (
        <div>
            <div className="hero min-h-screen shadow-lg bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={pic} className='rounded-lg' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-2xl pt-8 font-bold text-center'>Sign in to Doc House</h2>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Username or Email Address</span>
                                </label>
                                <input type="email" placeholder="enter username or email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                    <a href="#" className="label-text-alt text-red-600">Forgot password?</a>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info text-white">Login</button>
                            </div>
                            <label className="label">
                                <p className="text-sm text-center">
                                Please register at first. Go to <Link to='/signup' className="text-red-600 font-semibold">SIGN UP</Link>
                                </p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;