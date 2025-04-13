import React, { useState, useEffect } from "react";
import OverviewCard from "../components/OverviewCard";
import RecentActivityTable from "../components/RecentActivityTable";
import Navbar from "../components/Navigation";
import axios from "axios";

const Dashboard = () => {
  const [plant, setPlant] = useState([]);
  const [counts, setCounts] = useState({
    contentCreators: 0,
    users: 0,
    admins: 0,
});
  console.log(counts);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/herbs")
      .then((res) => setPlant(res.data))
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

 

useEffect(() => {
    const fetchCounts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users/getCount');
            const data = await response.json();
            setCounts(data);
        } catch (error) {
            console.error('Error fetching user counts:', error);
        }
    };

    fetchCounts();
}, []);
  return (
    <div className="p-6  min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      <p className="text-2xl pb-3 font-semibold font-serif">Dashboard</p>
      {/* Overview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <OverviewCard title="Total Users" value={counts.users} icon="👤" />
        <OverviewCard title="Total Herbs" value={plant.length} icon="🌿" />
        <OverviewCard title="Content Creator" value={counts.contentCreators} icon="📄" />
        {/* <OverviewCard title="Herb Categories" value="8" icon="📚" /> */}
      </div>

      {/* Recent Activities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent User Activity</h2>
        <RecentActivityTable />
      </div>
    </div>
  );
};

export default Dashboard;
