import React from "react";
import handleSort from './methods/sort';

export default function TableHeaders() {
  return (
    <div className="tableheaders_container container mt-5">
      <div className="container tableheaders">
        <div className="company_name">
          <h5>Company name</h5>
        </div>

        <div className="job_title">
          <h5>Job Title</h5>
        </div>

        <div className="status">
          <h5>Status</h5>
        </div>

        <div className="date_applied">
          <h5>Date Applied</h5>
        </div>

        <div className="sort">
          <p className="mr-2">Sort by:</p>
          <select id="sort_select" onChange={handleSort}>
            <option value="none">None</option>
            <option value="date">Date</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>
    </div>
  );
}
