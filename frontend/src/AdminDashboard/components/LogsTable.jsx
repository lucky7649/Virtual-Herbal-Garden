import React from "react";

const LogsTable = () => {
  const logs = [
    { event: "Admin Login", detail: "Admin logged in successfully", time: "2024-11-22 12:00" },
    { event: "Herb Added", detail: "Neem was added to the database", time: "2024-11-22 11:30" },
    { event: "User Blocked", detail: "User 'Alice' was blocked", time: "2024-11-22 10:45" },
  ];

  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 text-left">Event</th>
          <th className="py-2 px-4 text-left">Detail</th>
          <th className="py-2 px-4 text-left">Time</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => (
          <tr key={index} className="border-b">
            <td className="py-2 px-4">{log.event}</td>
            <td className="py-2 px-4">{log.detail}</td>
            <td className="py-2 px-4">{log.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogsTable;
