import React from "react";

const ApplicationRow = ({application,index}) => {
    const{title,company,company_logo,}=application;
  return (
    <div>
      <tr>
        <th>
          <label>
            {index +1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-12 h-12 mask mask-squircle">
                <img
                  src={company_logo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{company}</div>
              <div className="text-sm opacity-50">{title}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default ApplicationRow;
