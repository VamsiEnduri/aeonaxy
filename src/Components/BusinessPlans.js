import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BusinessPlans = () => {
  return (
    <div className="p-12 ">
      <div className="bg-[#F4F5FD] rounded-lg mt-1 p-5">
        <h1 className="text-xl font-semibold">Business & eCommerce Plans</h1>
        <p className="mt-3">
          The sky danced with hues of pink and orange as the sun dipped below
          the horizon.
        </p>
        <p className="mt-1">The sky danced with hues of pink and orange </p>
        <p className="mt-2 text-[#99C9EE]">
          See Business Plans &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </div>
      <div className="p-5">
        Underneath the ancient oak tree, a small stream murmured softly, its
        waters reflecting the golden hues of the setting sun. Underneath the
        ancient oak tree, <br /> a small stream murmured softly, its waters
        reflecting the golden hues of the setting sun.
      </div>
      <hr className="mt-1" />
    </div>
  );
};

export default BusinessPlans;
