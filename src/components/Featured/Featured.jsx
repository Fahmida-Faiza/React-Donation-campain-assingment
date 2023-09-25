import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featured = () => {

const [jobs ,setjobs] = useState([]);

useEffect( () =>{
 fetch('donation.json')
 .then(res => res.json())
 .then(data => setjobs(data))
}, [])



    return (
        <div>
            <div className="text-center my-3 lg:my-10">
                <h2>all donated list:{jobs.length} </h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

                {
                    jobs.map(job => <Job key ={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Featured;