// import React from "react";

// const Banner = () => {
//   return (
//     <div className="bg-[#E7EAFE] flex flex-col justify-center items-center p-5">
//       <h1 className="font-bold text-2xl">Wix Premium Plans</h1>
//       <span className="font-normal">
//         Wix gives you 100s of templates, unlimited pages & top grade
//       </span>
//       <span> hosting FREE.Upgrade to Premium and get even more</span>
//       <span className="bg-[#A94DC6] rounded-full px-6 py-2 mt-4 mb-4 self-center text-white">
//         Get Started Today
//       </span>
//       <div className="flex -mb-6">
//         <div className="text-center bg-white p-4 border-r rounded-lg">
//           <p className="text-[#9E50B5]">Webiste Plans</p>
//           <span className="text-[#B68EC2]">
//             Great for showcasing a professional Site
//           </span>
//         </div>
//         <div className="bg-[#CDD2FF] p-4">
//           <p>Bussiness & eCommercePlans</p>
//           <span>Main for online Payments</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#E7EAFE] flex flex-col justify-center items-center pt-[120px]  md:pt-20 md:pb-10">
      <h1 className="font-bold text-2xl md:text-4xl text-center">
        Wix Premium Plans
      </h1>
      <span className="font-normal text-center">
        Wix gives you 100s of templates, unlimited pages & top grade hosting
        FREE. Upgrade to Premium and get even more
      </span>
      <span className="bg-[#A94DC6] rounded-full px-6 py-2 mt-4 mb-4 self-center text-white">
        Get Started Today
      </span>
      <div className="flex flex-col md:flex-row we">
        <div className="text-center bg-white p-4 border-r rounded-lg md:rounded-l-lg md:border-r-0">
          <p className="text-[#9E50B5]">Webiste Plans</p>
          <span className="text-[#B68EC2]">
            Great for showcasing a professional Site
          </span>
        </div>
        <div className="bg-[#CDD2FF] p-4 md:rounded-r-lg">
          <p>Bussiness & eCommerce Plans</p>
          <span>Main for online Payments</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
