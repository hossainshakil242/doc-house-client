
const TabContent = ({title,img}) => {
    return (
        <div className="space-y-3">
            <img src={img} alt="" />
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
            <button className="btn btn-success btn-outline">More Details</button>
        </div>
    );
};

export default TabContent;