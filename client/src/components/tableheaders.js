import React from "react";

export default function TableHeaders() {
  return (
    <div className="container mt-4">
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

        <div className="delete_btn"></div>
      </div>
    </div>
  );
}
