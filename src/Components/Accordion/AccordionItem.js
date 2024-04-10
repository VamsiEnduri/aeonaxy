import React, { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AccordionItem = ({ qn, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        className=" flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <div className=" text-md font-medium">{qn}</div>
        <div className="">
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </div>
      {isOpen && <div className=" text-sm my-2">{answer}</div>}
    </div>
  );
};

export default AccordionItem;
