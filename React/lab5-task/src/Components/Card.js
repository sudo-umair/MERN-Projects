import React from 'react'

export default function Card(props) {
  const mystyle = {
    width: "18 rem",
  };
  return (
    <div className="card" style={mystyle}>
      <div className="card-body">
        <h5 className="card-title">{props.educationlevel}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.institution}</h6>
        <p className="card-text">
          {props.description}
        </p>
      </div>
    </div>
  );
}
