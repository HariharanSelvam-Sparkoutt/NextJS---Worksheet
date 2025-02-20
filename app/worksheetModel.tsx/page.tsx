"use client";

import { useEffect, useState } from "react";

interface WorksheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    date: string;
    projectName: string;
    pm: string;
    workDescription: string;
  }) => void;
}

export default function WorksheetModal({
  isOpen,
  onClose,
  onSave,
}: WorksheetModalProps) {
  const [date, setDate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [pm, setPm] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [error, setError] = useState("");

  const projectOptions = [
    "Project1",
    "Project2",
    "Project3",
    "Project4",
    "Project5",
  ];

  useEffect(() => {
    if (!isOpen) {
      setDate("");
      setProjectName("");
      setPm("");
      setWorkDescription("");
      setError("");
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!date || !projectName || !pm || !workDescription) {
      setError("All fields are required!"); // Show error message
      return;
    }
    setError(""); // Clear error if validation passes
    onSave({ date, projectName, pm, workDescription });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Worksheet Entry</h2>

        {/* Date Input */}
        <label className="block mb-2">Date</label>
        <input
          type="date"
          className="w-full border p-2 rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        {/* Project Name Input */}
        <label className="block mb-2">Project Name</label>
        <select
          className="w-full border p-2 rounded mb-4"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a Project
          </option>
          {projectOptions.map((project, index) => (
            <option key={index} value={project}>
              {project}
            </option>
          ))}
        </select>

        {/* PM Input */}
        <label className="block mb-2">PM</label>
        <input
          type="text"
          className="w-full border p-2 rounded mb-4"
          value={pm}
          onChange={(e) => setPm(e.target.value)}
          required
        />

        {/* Work Description */}
        <label className="block mb-2">Work Description</label>
        <textarea
          className="w-full border p-2 rounded mb-4"
          value={workDescription}
          onChange={(e) => setWorkDescription(e.target.value)}
          required
        />

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
          <button
            // onClick={() => {
            //   onSave({ date, projectName, pm, workDescription });
            //   onClose();
            // }}
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
