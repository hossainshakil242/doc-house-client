import Cart from "./Cart";

const data = [
    {
        _id: 1,
        name: "Karyen Anderson",
        possition: "BTP -  Senior Physiotherapist",
        rating: 4,
        loacation: "Dhanmondi, Dhaka, Bangladesh",
        job: "Available On Mon, 22 December",
        price: "10",
        img: "https://i.ibb.co/x516Gsz/doctor-1.jpg"
    },
    {
        _id: 2,
        name: "Karyen Anderson",
        possition: "BTP -  Senior Physiotherapist",
        rating: 1,
        loacation: "Dhanmondi, Dhaka, Bangladesh",
        job: "Available On Mon, 22 December",
        price: "10",
        img: "https://i.ibb.co/3fYcZK9/doctor-2.jpg"
    },
    {
        _id: 3,
        name: "Karyen Anderson",
        possition: "BTP -  Senior Physiotherapist",
        rating: 2,
        loacation: "Dhanmondi, Dhaka, Bangladesh",
        job: "Available On Mon, 22 December",
        price: "10",
        img: "https://i.ibb.co/NWpN6rM/doctor-5.jpg"
    }
];
const Expert = () => {
    return (
        <div className="my-5">
            {/* Title Our Expert section */}
            <div className="flex flex-col items-center space-y-5">
                <h2 className="text-3xl font-semibold">Our Expert Doctors</h2>
                <p className="md:w-2/3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map(item => <Cart
                        key={item._id}
                        item={item}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Expert;