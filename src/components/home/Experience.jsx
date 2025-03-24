import React from 'react';

const Experience = ({ heading, data }) => {
  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">{heading}</h2>
      <div className="row justify-content-center">
        {data.map((exp, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="p-4 shadow-sm bg-white rounded text-center">
              <h4>{exp.role}</h4>
              <p className="mb-1">{exp.companyname}</p>
              <p className="text-muted">{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
