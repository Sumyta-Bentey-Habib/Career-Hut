import React from 'react';
import workingimage from "../assets/images/workingwoman.avif";
const ProfileCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="relative w-full max-w-sm">

        <div className="absolute -top-4 -right-4 w-full h-full bg-red-500 rounded-xl z-0 transform rotate-[-4deg]" />
        <div className="absolute -top-2 -right-2 w-full h-full bg-blue-500 rounded-xl z-0 transform rotate-[-2deg]" />
        

        <div className="relative z-10 rounded-xl overflow-hidden bg-white shadow-lg">
          <img
            src={workingimage}
            alt="Professional"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
