import React, { use } from "react";
import ApplicationRow from "./ApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const application = use(myApplicationPromise);
  return (
    <div>
      <h3 className="text-3xl">Jobs Applied so far: {application.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {
            application.map((application ,index)=><ApplicationRow
            key={application._id}
            application={application}
            index={index}
            ></ApplicationRow>)
           }
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
