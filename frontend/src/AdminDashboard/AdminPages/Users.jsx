import React, { useState, useEffect } from "react";

const Users = () => {
  // Initial users data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", status: "Active" },
  ]);

  // Notification state
  const [notification, setNotification] = useState({
    message: "",
    color: "",
    visible: false,
  });

  const [usersAndCreators, setUsersAndCreators] = useState([]);
 console.log(usersAndCreators)
    useEffect(() => {
        const fetchUsersAndCreators = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users/userData');
                const data = await response.json();
                setUsersAndCreators(data);
            } catch (error) {
                console.error('Error fetching users and content creators:', error);
            }
        };

        fetchUsersAndCreators();
    }, []);

  // Function to show notification
  const showNotification = (message, color) => {
    setNotification({ message, color, visible: true });

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification({ ...notification, visible: false });
    }, 5000);
  };

  // Block user function
  const handleBlockUser = (id) => {
    const user = usersAndCreators.find((u) => u._id ===  _id);
    if (user) {
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === id ? { ...u, status: "Blocked" } : u
        )
      );
      showNotification(`${user.username} has been blocked.`, "bg-yellow-600");
    }
  };

  // Delete user function
  const handleDeleteUser = (id) => {
    const user = users.find((u) => u.id === id);
    if (user) {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
      showNotification(`${user.name} has been deleted.`, "bg-red-600");
    }
  };

  return (
    <div className="container mx-auto relative">
      <h2 className="text-2xl font-semibold mb-6">User Management</h2>
      
      {/* Notification */}
      {notification.visible && (
        <div
          className={`fixed top-6 right-0 transform ${
            notification.visible ? "translate-x-0" : "translate-x-full"
          } ${notification.color} text-white p-4 rounded-md shadow-md transition-transform duration-300`}
          style={{ padding: "12px" }}
        >
          {notification.message}
        </div>
      )}

      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">role</th>
            <th className="py-2 px-4 text-left"></th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersAndCreators.map((usersAndCreators) => (
            <tr key={usersAndCreators.id} className="border-b">
              <td className="py-2 px-4">{usersAndCreators._id}</td>
              <td className="py-2 px-4">{usersAndCreators.username}</td>
              <td className="py-2 px-4">{usersAndCreators.email}</td>
              <td className="py-2 px-4">{usersAndCreators.role}</td>
              <td
                className={`py-2 px-4 ${
                  usersAndCreators.
                  isActive
                  === true
                    ? "text-green-600"
                    : usersAndCreators.isActive === "false"
                    ? "text-gray-600"
                    : "text-red-600"
                }`}
              >
                {usersAndCreators.isActive
}
              </td>
              <td className="py-2 px-4">
                {usersAndCreators.status !== "Blocked" && (
                  <button
                    onClick={() => handleBlockUser(usersAndCreators._id)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded mr-2 hover:bg-yellow-600"
                  >
                    Block
                  </button>
                )}
                <button
                  onClick={() => handleDeleteUser(usersAndCreators._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
