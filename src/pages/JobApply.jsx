import React from "react";
import { useParams } from "react-router";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";

const JobApply = () => {
  const { id: job_id } = useParams();
  const { user } = UseAuth();
  console.log(job_id, user);
  const handelApplyFormSubmit = (e) => {
    e.preventDefault();
    const form =e.target;
    const linkedIn =form.linkedIn.value;
    const github =form.github.value;
    const resume =form.resume.value;
    
    const application ={
      job_id,
      applicant: user.email,
      linkedIn,
      github,
      resume
    }
    axios.post('http://localhost:3000/applications',application)
    .then(res=>{
      console.log(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
    
  };
  return (
    <div>
      <h3 className="text-4x">Apply Job for </h3>
      <form onSubmit={handelApplyFormSubmit}>
        <fieldset className="p-4 border fieldset bg-base-200 border-base-300 rounded-box w-xs">
          <label className="label">LinkedIn Link </label>
          <input
            type="url"
            className="input"
            placeholder="LinkedIn Profile Link"
            name="linkedIn"
          />

          <label className="label">GitHub Link</label>
          <input
            type="url"
            className="input"
            placeholder="GitHub Profile Link"
            name="github"
          />

          <label className="label">Resume Link</label>
          <input
           type="url"
            className="input" 
            placeholder="Resume Link" 
            name="resume"
            />
          <input type="submit" value="Apply" className="btn" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
