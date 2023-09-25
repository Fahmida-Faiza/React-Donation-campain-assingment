import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id, img, category, title } = job;
    return (
      <Link to ={`/job/${id}`}>
      
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

      
      
      
      
      </Link>
    );
};

export default Job;