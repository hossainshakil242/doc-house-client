const Banners = ({miniTitle,title}) => {
    return (
        <div className="px-10 py-32" style={{ backgroundColor: '#07332F' }}>
            <div className="text-white grid">
                <p className="font-normal">{miniTitle}</p>
                <h2 className="text-4xl font-semibold">{title}</h2>
            </div>
            
        </div>
    );
};

export default Banners;