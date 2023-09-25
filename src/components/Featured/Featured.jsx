import { useEffect, useState } from "react";


const Featured = () => {

const [donations ,setdonations] = useState([]);

useEffect( () =>{
 fetch('donation.json')
 .then(res => res.json())
 .then(data => setdonations(data))
}, [])



    return (
        <div>
            <div className="text-center">
                <h2>all donated list:{donations.length} </h2>
            </div>
        </div>
    );
};

export default Featured;