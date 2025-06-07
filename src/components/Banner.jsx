import React from "react";
import ProfileCard from "./ProfileCard";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <ProfileCard></ProfileCard>
        <div>
          <h1 className="text-5xl font-bold">Career Hut</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Find Your Job</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
