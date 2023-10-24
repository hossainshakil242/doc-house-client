import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { MdWork } from 'react-icons/md';
import { FaDollarSign, FaLocationDot } from 'react-icons/fa6';
import { Link } from "react-router-dom";

const Cart = ({ item }) => {
    const { name, possition, rating, loacation, job, price, img } = item;
    return (
        <div className="border rounded-xl bottom-1 p-5 shadow-xl">
            <div className="card rounded-xl">
                <figure><img src={img} className="rounded-xl" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{possition}</p>
                    <div>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                    </div>

                    <div>
                        <p className='flex items-center gap-1'><FaLocationDot></FaLocationDot>{loacation}</p>
                        <p className='flex items-center gap-1'><MdWork></MdWork>{job}</p>
                        <p className='flex items-center gap-1'><FaDollarSign></FaDollarSign> {price}</p>
                    </div>

                    <div className=" justify-center">
                        <Link to='/profile' className="btn btn-outline btn-success text-semibold text-md btn-block">View Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;