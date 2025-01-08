import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ heading, backLink, syncLink }) => {
  return (
    <div className="breadcrumb d-flex justify-content-between align-items-center">
      {/* Back Arrow */}
      <div className="d-flex">
        <Link to={backLink}>
          <img
            src="../assets/icons/Arrow back ios (2).svg"
            alt="Back"
            className="breadcrumb-back-icon"
          />
        </Link>

        {/* Dynamic Heading */}
        <h3 className="breadcrumb-heading mb-0 mx-2">{heading}</h3>
      </div>
      {/* Synchronize Icon */}
      <div>
        {syncLink && (
          <Link to={syncLink} className="ms-auto">
            <img
              src="../assets/icons/Synchronize.svg"
              alt="Synchronize"
              className="breadcrumb-sync-icon"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
