import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstroage";


const Details = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = ()=>{
        saveJobApplication(idInt);
        toast('You have applied sucessfully')
    }
    return (
        <div>
            <h2>job details of :{id} </h2>

            <div className="">
                <img src={job.img} width={800} alt="" />
                <button onClick={handleApplyJob} className="btn btn-success">Donate{job.price}</button>
            </div>

           

            <div className="">
                <h2 className="text-4xl">{job.title}</h2>
                <p>{job.description}</p>
            </div>

            <ToastContainer />

        </div>
    );
};

export default Details;