// import React from "react";
// import AccordionItem from "./AccordionItem";

// const Accordion = () => {
//   const answer =
//     "The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
//   const faqQNA = [
//     {
//       qn: "What is a Premium Plan?",
//       answer: answer,
//     },
//     {
//       qn: "Can I try Wix Premium Plan for Free?",
//       answer: answer,
//     },
//     {
//       qn: "How do i get my free domain?",
//       answer: answer,
//     },
//     {
//       qn: "Why do i need custom domain?",
//       answer: answer,
//     },
//     {
//       qn: "How can i get my personalized email address?",
//       answer: answer,
//     },
//     {
//       qn: "Where Can i find my billing information?",
//       answer: answer,
//     },
//     {
//       qn: "What online payments are accepted?",
//       answer: answer,
//     },
//   ];
//   return (
//     <div className="flex justify-between items-start m-5">
//       <div className="w-1/3 m-2">
//         <h1 className="text-3xl font-medium">FrequentlyAsked Questions</h1>
//         <span>
//           Haven't find what are you looking for?
//           <br />
//           Try the
//           <span className="text-[#98C9ED]">Wix Help Center</span>or
//           <br />
//           <span className="text-[#98C9ED]">Contct Us</span>
//         </span>
//       </div>
//       <div className="flex flex-col w-2/3">
//         {faqQNA.map((faq, index) => {
//           return (
//             <div className="m-3 p-3">
//               <hr className="mb-1" />
//               <AccordionItem qn={faq.qn} answer={faq.answer} key={index} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Accordion;

import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const answer =
    "The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
  const faqQNA = [
    {
      qn: "What is a Premium Plan?",
      answer: answer,
    },
    {
      qn: "Can I try Wix Premium Plan for Free?",
      answer: answer,
    },
    {
      qn: "How do i get my free domain?",
      answer: answer,
    },
    {
      qn: "Why do i need custom domain?",
      answer: answer,
    },
    {
      qn: "How can i get my personalized email address?",
      answer: answer,
    },
    {
      qn: "Where Can i find my billing information?",
      answer: answer,
    },
    {
      qn: "What online payments are accepted?",
      answer: answer,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between items-start m-5">
      <div className="w-full md:w-1/3 m-2">
        <h1 className="text-3xl font-medium">Frequently Asked Questions</h1>
        <span>
          Haven't found what you are looking for?
          <br />
          Try the
          <span className="text-[#98C9ED]"> Wix Help Center</span> or
          <br />
          <span className="text-[#98C9ED]">Contact Us</span>
        </span>
      </div>
      <div className="w-full md:w-2/3 flex flex-col">
        {faqQNA.map((faq, index) => {
          return (
            <div className="m-3 p-3" key={index}>
              <hr className="mb-1" />
              <AccordionItem qn={faq.qn} answer={faq.answer} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
