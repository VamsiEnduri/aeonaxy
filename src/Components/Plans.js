import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Plans = () => {
  return (
    <div className="p-10">
      <div className="container mx-auto">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap border-0.5 border-gray-400 border-collapse">
            <thead className="">
              <tr className="">
                <th className="px-4 py-3  border"></th>
                <th className="px-4 py-3  flex flex-col border">
                  VIP
                  <span className="font-normal capitalize">
                    First Priority Support
                  </span>
                  <span>-</span>
                  <p className="font-normal lowercase">
                    <span className="font-bold text-xl">500rs</span>/month
                  </p>
                </th>
                <th className="px-4 py-3  border th bg-[#F0F2F4]">
                  Unlimited
                  <span className="font-normal capitalize">Freelancers</span>
                  <span>-</span>
                  <p className="font-normal lowercase">
                    <span className="font-bold text-xl">250rs</span>/month
                  </p>
                </th>
                <th className="px-4 py-3  border th">
                  Combo
                  <span className="font-normal capitalize">
                    For Personal Use
                  </span>
                  <span>-</span>
                  <p className="font-normal lowercase">
                    <span className="font-bold text-xl">150rs</span>/month
                  </p>
                </th>
                <th className="px-4 py-3  border th">
                  Connect Domain
                  <span className="font-normal capitalize">
                    For Personal Use
                  </span>
                  <span>-</span>
                  <p className="font-normal lowercase">
                    <span className="font-bold text-xl">90rs</span>/month
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="px-4 py-3 text-center  border">
                <td className="px-4 py-4  border">Features</td>
                <td className="px-4 py-4  border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4  border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4  border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4  border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr className="px-4 py-3 text-center">
                <td className="px-4 py-4 border">Free Domain For 1 year</td>
                <td className="px-4 py-4 border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4 border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4 border">-</td>
                <td className="px-4 py-4 border">-</td>
              </tr>
              <tr className="px-4 py-3 text-center">
                <td className="px-4 py-4 border">Bandwidth</td>
                <td className="px-4 py-4 border">Unlimited</td>
                <td className="px-4 py-4 border">Unlimited</td>
                <td className="px-4 py-4 border">2GB</td>
                <td className="px-4 py-4 border">1GB</td>
              </tr>
              <tr className="px-4 py-3 text-center">
                <td className="px-4 py-4 border">Storage Space</td>
                <td className="px-4 py-4 border">35GB</td>
                <td className="px-4 py-4 border">10GB</td>
                <td className="px-4 py-4 border">3GB</td>
                <td className="px-4 py-4 border">500MB</td>
              </tr>
              <tr className="px-4 py-3 text-center">
                <td className="px-4 py-4 border">Video hours</td>
                <td className="px-4 py-4 border">5 hours</td>
                <td className="px-4 py-4 border">1 hour</td>
                <td className="px-4 py-4 border">30 minutes</td>
                <td className="px-4 py-4 border">-</td>
              </tr>
              <tr className="px-4 py-3 text-center">
                <td className="px-4 py-4 border">Yandex Voucher</td>
                <td className="px-4 py-4 border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4 border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4 border">-</td>
                <td className="px-4 py-4 border">-</td>
              </tr>
              <tr className="px-4 py-3 text-center">
                <td className="px-4 py-4 border">Yandex Voucher</td>
                <td className="px-4 py-4 border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4 border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4 border">-</td>
                <td className="px-4 py-4 border">-</td>
              </tr>
              <tr className="px-4 py-3 text-center">
                <td className="px-4 py-4 border">Yandex Voucher</td>
                <td className="px-4 py-4 border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4 border">
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td className="px-4 py-4 border">-</td>
                <td className="px-4 py-4 border">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Plans;
