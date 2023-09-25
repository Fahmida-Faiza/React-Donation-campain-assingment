

const Job = ({job}) => {
    const { img, category, title } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
          
                <div className="card-body">
                    {/* <h2 className="card-title">Shoes!</h2> */}

                    <div className="card-actions ">
                        <button className="btn btn-primary">{category}</button>
                    </div>
                    <h2 className="card-title">{title}</h2>
                </div>
          </div>
        
    );
};

export default Job;