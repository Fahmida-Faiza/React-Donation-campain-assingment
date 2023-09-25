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
            <div className="text-center">
                <h2>all donated list:{jobs.length} </h2>
            </div>


            <div className="grid grid-cols-4 gap-6">

                {
                    jobs.map(job => <Job key ={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Featured;