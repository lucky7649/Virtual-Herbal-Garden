import React from "react";
import LogsTable from "../components/LogsTable";

const Logs = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-6">System Logs</h2>
      <LogsTable />
    </div>
  );
};

export default Logs;
