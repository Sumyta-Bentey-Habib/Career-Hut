import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaMoneyBillWave,
  FaUserTie,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const JobsDetails = () => {
  useEffect(() => {
    document.title = "Job Description || Career Hut";
  }, []);

  const job = useLoaderData();
  const {
    title,
    location,
    jobType,
    category,
    description,
    company_logo,
    company,
    requirements,
    responsibilities,
    salaryRange,
    applicationDeadline,
    hr_email,
    hr_name,
    _id,
  } = job;

  return (
    <div className="max-w-4xl p-6 mx-auto mt-10 bg-white border border-gray-100 shadow-lg rounded-2xl">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <img
          src={company_logo}
          alt={company}
          className="object-contain p-2 border w-28 h-28 rounded-xl bg-gray-50"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="flex items-center justify-center gap-1 mt-1 text-gray-500 md:justify-start">
            <FaBuilding /> {company}
          </p>
          <div className="flex flex-wrap gap-2 mt-2 text-sm text-white">
            <span className="flex items-center gap-1 px-3 py-1 bg-blue-600 rounded-full">
              <FaBriefcase /> {jobType}
            </span>
            <span className="px-3 py-1 bg-green-600 rounded-full">
              {category}
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-purple-600 rounded-full">
              <FaMapMarkerAlt /> {location}
            </span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-5 text-gray-700">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Job Description</h2>
          <p>{description}</p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Salary Range</h2>
          <p className="flex items-center gap-2 font-medium text-green-700">
            <FaMoneyBillWave />
            {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency.toUpperCase()}
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Application Deadline</h2>
          <p className="flex items-center gap-2 text-red-600">
            <FaClock /> {applicationDeadline}
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Requirements</h2>
          <ul className="space-y-1 list-disc list-inside">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {responsibilities?.length > 0 && (
          <div>
            <h2 className="mb-2 text-xl font-semibold">Responsibilities</h2>
            <ul className="space-y-1 list-disc list-inside">
              {responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2 className="mb-2 text-xl font-semibold">HR Contact</h2>
          <p className="flex items-center gap-2">
            <FaUserTie /> {hr_name}
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope />{" "}
            <a
              href={`mailto:${hr_email}`}
              className="text-blue-600 hover:underline"
            >
              {hr_email}
            </a>
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="mt-6 text-center">
          <Link to={`/jobApply/${_id}`}>
            <button className="inline-flex items-center gap-2 px-6 py-3 text-white transition duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105">
              <FaPaperPlane /> Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
