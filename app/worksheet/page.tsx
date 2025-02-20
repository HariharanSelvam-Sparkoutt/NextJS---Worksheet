"use client";

import { useState } from "react";
import WorksheetModal from "../worksheetModel.tsx/page";

export default function Worksheet() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [worksheetData, setWorksheetData] = useState<
    { date: string; projectName: string; pm: string; workDescription: string }[]
  >([]);

  const handleSave = (data: {
    date: string;
    projectName: string;
    pm: string;
    workDescription: string;
  }) => {
    setWorksheetData([...worksheetData, data]);
  };

  const filterData = worksheetData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return (
      entryDate.getFullYear() === selectedYear &&
      entryDate.getMonth() === selectedMonth
    );
  });

  return (
    <>
      <section className="bg-gray-500 dark:bg-gray-900 p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <div className="flex gap-4 p-4">
                    {/* Year Dropdown */}
                    <label htmlFor="year">Year</label>
                    <select
                      id="year"
                      className="border rounded p-2"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(Number(e.target.value))}
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>

                    {/* Month Dropdown */}
                    <label htmlFor="month">Month</label>
                    <select
                      id="month"
                      className="border rounded p-2"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(Number(e.target.value))}
                    >
                      {months.map((month, index) => (
                        <option key={index} value={index}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  type="button"
                  className="flex items-center justify-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  <svg
                    className="h-3.5 w-3.5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add Entry
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-4 py-3 border">S. No</th>
                    <th className="px-4 py-3 border">Date</th>
                    <th className="px-4 py-3 border">Project Name</th>
                    <th className="px-4 py-3 border">PM</th>
                    <th className="px-4 py-3 border">Work Description</th>
                  </tr>
                </thead>
                <tbody>
                  {filterData.map((entry, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-3 border">{index + 1}</td>
                      <td className="px-4 py-3 border">{entry.date}</td>
                      <td className="px-4 py-3 border">{entry.projectName}</td>
                      <td className="px-4 py-3 border">{entry.pm}</td>
                      <td className="px-4 py-3 border">
                        {entry.workDescription}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <WorksheetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}
