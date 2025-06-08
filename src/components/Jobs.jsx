import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
            {
                jobs.map(job=><JobCard
                key={job._id} job={job}
                ></JobCard>)
            }     
        </div>
    );
};

export default Jobs;
