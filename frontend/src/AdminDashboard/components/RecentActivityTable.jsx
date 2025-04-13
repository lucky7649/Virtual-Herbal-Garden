import React from "react";

const RecentActivityTable = () => {
  const activityLogs = [
    { user: "John Doe", activity: "Added Neem to bookmarks", time: "2024-11-22 14:00" },
    { user: "Jane Smith", activity: "Completed a quiz", time: "2024-11-22 13:45" },
    { user: "Alice", activity: "Logged in", time: "2024-11-22 13:30" },
  ];

  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 text-left">User</th>
          <th className="py-2 px-4 text-left">Activity</th>
          <th className="py-2 px-4 text-left">Time</th>
        </tr>
      </thead>
      <tbody>
        {activityLogs.map((log, index) => (
          <tr key={index} className="border-b">
            <td className="py-2 px-4">{log.user}</td>
            <td className="py-2 px-4">{log.activity}</td>
            <td className="py-2 px-4">{log.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentActivityTable;
