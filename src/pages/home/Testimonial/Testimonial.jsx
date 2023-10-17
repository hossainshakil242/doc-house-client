
const Testimonial = () => {
    return (
        <div className="bg-green-950 text-white py-20 px-16 rounded-lg mb-5 flex items-center justify-center gap-6">
            <div className="w-1/2 space-y-7">
                <h2 className="text-4xl font-semibold">Contact With Us</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <p>+08789048978</p>
                <p>+dhaka bangladehs</p>
            </div>
            <div className="w-1/2 space-y-5">
                <div className="flex gap-4 w-full">
                    <input type="text" placeholder="Name" className="input bg-green-700 input-bordered w-full" />
                    <input type="email " placeholder="Email" className="input bg-green-700 input-bordered w-full" />
                </div>
                <div className="flex gap-3 w-full">
                    <input type="text" placeholder="Mobile Number" className="input bg-green-700 input-bordered w-full" />
                    <input type="text " placeholder="Doctor Name" className="input bg-green-700 input-bordered w-full" />
                </div>
                <div className="flex gap-3 w-full">
                    <input type="date" placeholder="Date" className="input bg-green-700 input-bordered w-full" />
                    <input type="time " placeholder="Time" className="input bg-green-700 input-bordered w-full" />
                </div>
                <div>
                    <button className="btn btn-outline btn-success btn-block">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;