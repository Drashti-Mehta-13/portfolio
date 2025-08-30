import React from "react";

function TemplateTwo({ data }) {
  return (
    <div className="template-two container my-5">
      <div
        className="card shadow-lg border-0 rounded-4 text-center"
        style={{
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
        color: "#2c3e50",}}>
        <div className="card-body p-5">
          <h1 className="card-title fw-bold display-5 mb-2 text-dark">
            {data.name}
          </h1>
          <h4 className="fw-semibold mb-3 text-primary">{data.title}</h4>
          <p className="fst-italic text-muted mb-4">{data.tagline}</p>
          <img
            src={data.profileImage}
            alt="profile"
            width="30%"
            className="shadow-lg border border-4 border-primary mb-4"
            style={{ borderRadius: "10px" }}
          />

          <p className="lead text-secondary mb-4">{data.bio}</p>

          <hr className="border-secondary opacity-25 my-4" />

          <div className="row justify-content-center text-start">
          <div className="col-md-5 mb-3">
            <p className="mb-1">
              <strong className="text-primary">Email:</strong>
              <span className="ms-2">{data.email}</span>
            </p>
          </div>
          <div className="col-md-5 mb-3">
          <p className="mb-1">
            <strong className="text-primary">Phone:</strong>
            <span className="ms-2">{data.phone}</span>
          </p>
          </div>
          </div>

          <div className="mt-4">
            <p className="fw-bold fs-5 mb-3 text-dark">Skills</p>
              {data.skills.split(",").map((skill, index) => (
            <span
              key={index}
              className="badge bg-primary bg-opacity-10 text-primary fs-6 mx-1 px-3 py-2 shadow-sm rounded-pill"
            >
              {skill.trim()}
            </span>
              ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default TemplateTwo;
