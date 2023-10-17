
const Cart = ({ item }) => {
    const { name, possition, rating, loacation, job, price, img } = item;
    return (
        <div className="border rounded-xl bottom-1 p-5 shadow-xl">
            <div className="card rounded-xl">
                <figure><img src={img} className="rounded-xl" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{possition}</p>
                    <p>rating: {rating}</p>

                    <div>
                        <p>{loacation}</p>
                        <p>{job}</p>
                        <p>${price}</p>
                    </div>

                    <div className=" justify-center">
                        <button className="btn btn-outline btn-success text-semibold text-md btn-block">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;