import React from "react";
import visa from "../assets/visa.jpg";
import diners from "../assets/dieners.jpg";
import union from "../assets/union.jpg";
import mastercard from "../assets/mastercard.jpg";
import american from "../assets/americanExpress.jpg";
import retur from "../assets/return.jpg";
import security from "../assets/security.jpg";

const Payments = () => {
  const cards = [
    { img: visa },
    { img: mastercard },
    { img: union },
    { img: american },
    { img: diners },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-10">
      <div className="flex flex-col gap-2 w-full md:w-1/3">
        <h1 className="font-medium uppercase">Accepted Payment Methods</h1>
        <div className="flex gap-2">
          {cards.map((card, index) => (
            <div key={index} className="flex w-[50px] h-[30px]">
              <img src={card.img} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-3 w-full md:w-1/3 mt-5 md:mt-0">
        <div className="w-[2px] h-5 bg-gray-300 md:block hidden"></div>
        <div>
          <img src={retur} alt="" className="rounded-full w-[70px] md:mr-3" />
        </div>
        <div>
          <h1 className="uppercase font-medium">money back guarantee</h1>
          <p>The stars shimmered softly in the velvet night sky</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-3 w-full md:w-1/3 mt-5 md:mt-0">
        <div className="w-[2px] h-5 bg-gray-300 md:block hidden"></div>
        <div>
          <img
            src={security}
            alt=""
            className="rounded-full w-[70px] md:mr-3"
          />
        </div>
        <div>
          <h1 className="uppercase font-medium">SSL secure payment</h1>
          <p>The stars shimmered softly in the velvet night sky</p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
