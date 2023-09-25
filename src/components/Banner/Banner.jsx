

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(Clothing.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl lg:text-5xl font-bold">I grow By helping people in need</h1>
                    <div className="join">
                        <input className="input input-bordered join-item " placeholder="Searching here..." />
                        <button className="btn join-item rounded-r-lg">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;