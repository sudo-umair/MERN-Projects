import React, { useRef } from 'react'
import axios from 'axios'

import calendar from '../Images/calendar.png'
import location from '../Images/location.png'
import document from '../Images/document.png'
import views from '../Images/views.png'
import verified from '../Images/verified.png'
import logo from '../Images/logo.jpg'

import './Card.css'

export default function Card() {

  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const viewsRef = useRef(null);


  const altText = 'No Image Available';

  const onClickHandler = (event) => {
    event.preventDefault();

    console.log('clicked');

    console.log(
      titleRef.current.innerText,
      dateRef.current.innerText,
      viewsRef.current.innerText
    );

    const title = titleRef.current.innerText;
    const date = dateRef.current.innerText;
    const views = viewsRef.current.innerText;

    console.log(title, date, views);

    axios.post("http://localhost:4060/insert", {
      title,
      date,
      views
    }).then(res => {
      console.log(res.data.Message);
    }
    );
  }
  return (
    <div className="card">
      <div className="card-image">
        <img src={logo} className="company-logo" alt={altText} />
      </div>
      <div className="card-body">
        <div className="job-title row">
          <h1 className="title" id="title" ref={titleRef}>Sr. iOS Developer</h1>
        </div>
        <div className="job-company row">
          <p className="company">Smart Placement Pvt Limited</p>
          <img src={verified} className="verified-img icon" alt={altText} />
        </div>
        <div className="job-location row">
          <img src={location} className="location-img icon" alt={altText} />
          <p className="location-text">Islamabad, Pakistan</p>
        </div>
        <div className="job-details row">
          <img src={calendar} className="date-img icon" alt={altText} />
          <p className="date-text" ref={dateRef}>Posted May 17, 2021</p>
          <img src={views} className="views-img icon" alt={altText} />
          <p className="views-text" ref={viewsRef}>26 Views</p>
          <img src={document} className="apply-img icon" alt={altText} />
          <a href='/' onClick={onClickHandler} className="apply-text">Report Job</a>
        </div>
      </div>
    </div>
  )
}
