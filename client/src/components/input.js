import React from "react";
import { handleSubmit } from "./methods/util";

export default function Input() {
  return (
    <div className="input_fields">
      <label htmlFor="company_name" className="mr-1">
        Company name:
      </label>
      <input
        type="text"
        id="company_name_inp"
        className="mr-1"
        placeholder="Google"
      />

      <label htmlFor="job_title" className="mr-1">
        Job Title:
      </label>
      <input
        type="text"
        id="job_title_inp"
        className="mr-1"
        placeholder="Software Engineer"
      />

      <label htmlFor="status" className="mr-1">
        Status:
      </label>
      <select id="status_inp" className="mr-3">
        <option value="select">Select a status</option>
        <option value="awaiting_res">Awaiting Response</option>
        <option value="no_res">No Response</option>
        <option value="hired">Hired</option>
      </select>

      <label htmlFor="date_applied" className="mr-1">
        Date applied:
      </label>
      <input
        type="text"
        id="date_applied_inp"
        className="mr-3"
        placeholder="mm/dd/yyyy"
      />

      <button onClick={handleSubmit} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}
