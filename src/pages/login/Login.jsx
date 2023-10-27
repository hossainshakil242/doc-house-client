import { Link } from 'react-router-dom';
import pic from '../../assets/login.png';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { logIn } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: 'kalam@gmail.com',
            password: 'Kalam12!@'
        }
    });

    const onSubmit = data => {
        const {email,password} = data;

        logIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
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
                        <h2 className='text-2xl pt-8 font-bold text-center'>Sign in to Doc House</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Username or Email Address</span>
                                </label>
                                <input type="email"
                                    {
                                    ...register("email", { required: true })
                                    }
                                    placeholder="enter username or email address" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                    <a href="#" className="label-text-alt text-red-600">Forgot password?</a>
                                </label>
                                <input type="password"
                                    {
                                    ...register("password", {
                                        required: 'This is required',
                                        minLength: {
                                            value: 4,
                                            message: 'Min length 4'
                                        },
                                        maxLength: {
                                            value: 24,
                                            message: 'Max length 8'
                                        }
                                    })
                                    }
                                    placeholder="password" className="input input-bordered" required />
                                <p className='text-red-800 text-sm'>{errors.password?.message}</p>
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