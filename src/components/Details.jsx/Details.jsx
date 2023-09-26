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
        <div className="py-2 lg:px-36 lg:pt-10">
            {/* <h2>job details of :{id} </h2> */}

                <div className="relative ">
                    <img src={job.img} className="w-full " alt="" />
                    <div className="absolute bottom-0 h-20 lg:h-32 w-full bg-[#0b0b0b80]">
                        <button onClick={handleApplyJob} className="my-4 lg:my-9  btn rounded-md text-white border-0 mx-9"
                        
                            style={{ backgroundColor: job.color["category-title-color"] }}
                        >Donate {job.price}</button>
                        {/* <h2 className="card-title font-semibold text-xl" style={{ color: job.color["category-title-color"] }}

                        >{job.price}


                        </h2> */}
                    </div>
               </div>
                
          

            <div className="">
                <h2 className="text-2xl lg:text-4xl font-bold my-4 lg:my-9">{job.title}</h2>
                <p className="text-[#0b0b0bb3]">{job.description}</p>
            </div>

            <ToastContainer />

        </div>
    );
};

export default Details;