import React from 'react';
import { Property } from '../state/properties';

export const PropertyDetails: React.FC<{ data: Property }> = ({ data }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Property Name
            </th>
            <td className="px-6 py-4">{data.propertyName}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Property Type
            </th>
            <td className="px-6 py-4">{data.propertyType}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              No of units
            </th>
            <td className="px-6 py-4">{data.noOfUnits}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Users
            </th>
            <td className="px-6 py-4">
              {data.userEmails?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
