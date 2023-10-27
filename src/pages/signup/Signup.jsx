import { Link } from "react-router-dom";
import pic from '../../assets/login.png';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    console.log(errors);

    const onSubmit = data => {
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen shadow-lg bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={pic} className='rounded-lg' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-2xl pt-8 font-bold text-center'>Sign up to Doc House</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* name filed */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name <span className="text-red-600">*</span></span>
                                </label>
                                <input {
                                    ...register("name", {
                                        required: "this is required",
                                        minLength: {
                                            value: 3,
                                            message: "min length 4 characters"
                                        },
                                        maxLength: {
                                            value: 24,
                                            message: "max length 24 characters"
                                        }
                                    })
                                }
                                    placeholder="Enter your name" className="input input-bordered" required />
                                <p className="text-red-800 text-sm font-medium pl-2">{errors.name?.message}</p>
                            </div>

                            {/* Username filed */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Username</span>
                                </label>
                                <input {
                                    ...register("userName", {
                                        required: true,
                                        pattern: {
                                            value: /(?=.*?[0-9].*?[0-9].*?[0-9])/,
                                            message: "must be three numbers"
                                        }
                                    })
                                } placeholder="Enter your username" className="input input-bordered" required />
                                <p className="text-red-700 text-sm font-medium pl-2">{errors.userName?.message}</p>
                            </div>

                            {/* Email filed */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input {
                                    ...register("email", {
                                        required: "email is not valid",
                                    })
                                } type="email" placeholder="Enter your valid email" className="input input-bordered" required />
                            </div>

                            {/* password filed */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input {
                                    ...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 6,
                                            message: "password has been minimum 6 characters"
                                        },
                                        maxLength: {
                                            value: 24,
                                            message: "password has been maximum 24 characters"
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                            message: "must have one upper case,lower case, number and special character"
                                        }
                                    })
                                } placeholder="password" className="input input-bordered" required />
                                <p className="text-red-800 text-sm font-medium pl-2">{errors.password?.message}</p>

                            </div>

                            {/* submit filed */}
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