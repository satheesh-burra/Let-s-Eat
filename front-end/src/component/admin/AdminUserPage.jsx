import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

const AdminUsers = () => {
  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: 'Admin One',
      email: 'admin1@example.com',
      location: 'New York',
      status: 'active',
    },
    {
      id: 2,
      name: 'Admin Two',
      email: 'admin2@example.com',
      location: 'Los Angeles',
      status: 'active',
    },
  ]);

  const handleBlock = (id) => {
    const updatedAdmins = admins.map((admin) =>
      admin.id === id ? { ...admin, status: 'blocked' } : admin
    );
    setAdmins(updatedAdmins);
  };

  const handleSpam = (id) => {
    const updatedAdmins = admins.map((admin) =>
      admin.id === id ? { ...admin, status: 'spam' } : admin
    );
    setAdmins(updatedAdmins);
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6 h-screen">
        <h2 className="text-2xl font-bold mb-4">Admin Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow-md rounded">
            <thead className="bg-red-100">
              <tr>
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Location</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={admin.id} className="text-center">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{admin.name}</td>
                  <td className="py-2 px-4 border">{admin.email}</td>
                  <td className="py-2 px-4 border">{admin.location}</td>
                  <td className="py-2 px-4 border capitalize">
                    {admin.status}
                  </td>
                  <td className="py-2 px-4 border">
                    {admin.status === 'blocked' ? (
                      <span className="text-red-600 font-semibold">Blocked</span>
                    ) : (
                      <div className="space-x-2">
                        <button
                          onClick={() => handleBlock(admin.id)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        >
                          Block
                        </button>
                        <button
                          onClick={() => handleSpam(admin.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Spam
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {admins.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-4">No admin users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
