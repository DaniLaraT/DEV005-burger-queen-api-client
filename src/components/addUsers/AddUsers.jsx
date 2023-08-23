/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddUsers.css";

const AddUsers = ({ onSaveChanges }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSaveChanges = () => {
    onSaveChanges(email, password, role);
  };

  return (
    <div className="container-add-users">
      <h1 className="title-edit">+ Add User</h1>
      <input
        className="user-email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="new-password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <select
        className="new-role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option className="option" disabled defaultValue>
          CHOOSE ROLE
        </option>
        <option className="option">CHEF</option>
        <option className="option">WAITER</option>
        <option className="option">ADMIN</option>
      </select>
      <button className="btn-accept-changes" onClick={handleSaveChanges}>
        + Add User
      </button>
    </div>
  );
};

AddUsers.propTypes = {
  onSaveChanges: PropTypes.func.isRequired,
};

export default AddUsers;
