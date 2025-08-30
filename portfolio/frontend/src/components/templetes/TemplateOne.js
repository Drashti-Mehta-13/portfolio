import React from "react";

function TemplateOne({ data }) {
  return (
    <div className="container py-5">
      <div className="template-one p-5 rounded shadow-lg" style={{ backgroundColor: "#e9f0f7" }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">{data.name}</h2>
        </div>

        <div className="text-white p-3 rounded mb-4 shadow-sm text-center" style={{ backgroundColor: "#f2f3f5" }}>
          <p className="lead mb-0">{data.title} — {data.tagline}</p>
        </div>

        <div className="row align-items-center mb-4">
          <div className="col-md-4 text-center">
            <img 
              src={data.profileImage} 
              alt="profile" 
              className="img-fluid rounded-circle shadow mb-3" 
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div className="col-md-8">
            <p className="text-secondary">{data.bio}</p>
          </div>
        </div>

      <div className="row text-center mb-4">
        <div className="col-md-6 mb-3">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: "#f2f3f5" }}>
            <p className="mb-0"><strong>Email:</strong> {data.email}</p>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: "#f2f3f5" }}>
            <p className="mb-0"><strong>Phone:</strong> {data.phone}</p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded shadow-sm text-center" style={{ backgroundColor: "#f2f3f5" }}>
        <p className="mb-0"><strong>Skills:</strong> {data.skills}</p>
      </div>
      </div>
    </div>

  );
}

export default TemplateOne;
