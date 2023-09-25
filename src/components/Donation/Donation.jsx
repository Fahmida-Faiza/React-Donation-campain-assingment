import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstroage";


const Donation = () => {

    const jobs = useLoaderData();

    const [appliedjobs, setappliedjobs]= useState([]);

    const[dataLength, setDataLength] = useState(4)

    useEffect (() =>{
        const storedJobIds =getStoredJobApplication()

        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            setappliedjobs(jobsApplied);
            console.log(jobs, storedJobIds,jobsApplied)
        }

  

    }, [])
    return (
        <div>
            <h2> jobs i applied/ Donation: {appliedjobs.length}</h2>
            <ul className="grid grid-cols-2 gap-6">

                {

                    appliedjobs.slice(0, dataLength).map(job => <li key={job.id}>
                        {/* <span>{job.title}</span> */}


                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={job.img} alt="Movie" /></figure>
                            <div className="card-body">
                                <div className="card-actions ">
                                    <button className="btn  btn-success">{job.category}</button>
                                </div>
                                <h2 className="card-title">{job.title}</h2>
                                <p>{job.price}</p>
                                <div className="card-actions ">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>




                    </li>)
                }
            </ul>

            {/* show all button */}

            <div className={ dataLength === jobs.length ? 'hidden' : ''}>
                <button 
                onClick={()=> setDataLength(jobs.length)}
                
                className="btn btn-secondary ">See All</button>
            </div>
        </div>
    );
};

export default Donation;