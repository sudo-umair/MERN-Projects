import React from 'react'
import image from '../images/image.jpeg'

export default function CardHorizontal(props) {
  const style = {
    maxWidth: "250px"
  };

  return (
    <div className="card mb-3" style={{ style }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.occupation}</p>
            <p className="card-text">
              <small className="text-muted">{props.description}</small>
            </p>
            <div className="card" style={{ width: "18rem;" }}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">muhammadumair523@gmail.com</li>
                <li className="list-group-item">+923092611414</li>
                <li className="list-group-item">
                  <a href="https://www.linkedin.com/in/muhammad-umair-07a767207/">
                    https://www.linkedin.com/in/muhammad-umair-07a767207/
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="https://github.com/umair-sudo">
                    https://github.com/umair-sudo
                  </a>
                </li>
                <li className="list-group-item">Rawalpindi, Pakistan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
