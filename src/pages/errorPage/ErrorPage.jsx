import { Link } from 'react-router-dom';
import errorPage from './../../assets/error/errorPage.jpg';
const ErrorPage = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <h2 className='text-4xl font-semibold'>Sorry,</h2>
            <p className='text-xl font-mono'>This page is not found.</p>
            <img src={errorPage} className='w-10/12 md:w-3/6' alt="" />
            <div className="btn px-10 text-white btn-success">
                <Link to='/'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;