import React, { useState } from "react";

// আলাদা Page Component
function AdminPage() {
  return <h2 className="text-danger">👑 Welcome Admin Dashboard</h2>;
}

function ManagerPage() {
  return <h2 className="text-primary">📊 Welcome Manager Panel</h2>;
}

function UserPage() {
  return <h2 className="text-success">🙋 Welcome User Profile</h2>;
}

function RoleBasedComboBox() {
  const [role, setRole] = useState("user");

  return (
    <div className="container mt-4">
      <h3>Select Role:</h3>
      <select
        className="form-select mb-4"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="user">User</option>
      </select>

      {/* Role অনুযায়ী page দেখানো হচ্ছে */}
      {role === "admin" && <AdminPage />}
      {role === "manager" && <ManagerPage />}
      {role === "user" && <UserPage />}
    </div>
  );
}

export default RoleBasedComboBox;