import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const {title,location,description,company_logo,company,requirements,salaryRange,_id}=job;
    
  return (
    <div className="shadow-sm card bg-base-100 w-96">
      <div className="flex ">
        <figure>
        <img
          src={company_logo}
            className="w-16"
          alt="Shoes"
        />
      </figure>
      <div>
        <h3 className="text-4xl">{company}</h3>
        <p className="flex items-center">{location}</p>
      </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
         {description}
        </p>
        <p>Salary:{salaryRange.min}-{salaryRange.max} {salaryRange.currency} </p>
        <div className=" card-actions">
            {
                requirements.map((skill,index)=>
                    <div
                    key={index}
                 className="badge badge-outline">{skill}</div>
                )
            }          
        </div>
         <div className="card-actions">
            <Link to={`/jobs/${_id}`}> <button className="btn btn-primary">Show Details</button></Link>
     
    </div>
      </div>
    </div>
  );
};

export default JobCard;
