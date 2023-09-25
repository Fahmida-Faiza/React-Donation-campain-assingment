import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id, img, category, title, color } = job;

    return (
      <Link to ={`/job/${id}`}>
      
            <div className="card card-compact shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>

                <div className="card-body"
                
                    style={{ backgroundColor: job.color["background-color"] }}   //ok
                
                
                
            
                
                >
                    {/* <h2 className="card-title">Shoes!</h2> */}

                    <div className="card-actions ">
                        <div className="text-2xl  text-sm font-medium px-2 "
                        
    
                        
                            style={{ backgroundColor: job.color["category-color"], 
                            color: job.color["category-title-color"] }}
                                >{job.category}


                        
                        </div>
                    </div>
                    <h2 className="card-title font-semibold text-xl" style={{ color: job.color["category-title-color"] }}
                    
                    >{job.title}
                    
                    
                    </h2>
                </div>
            </div>

      
      
      
      
      </Link>
    );
};

export default Job;