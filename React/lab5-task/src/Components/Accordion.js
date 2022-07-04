import React from "react";
import Card from "./Card";
import CardHorizontal from "./CardHorizontal";
import Table from "./Table";

export default function Accordion() {
  const mystyle = {
    width: "18 rem",
  };
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Personal Information
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <CardHorizontal
              name="Muhammad Umair"
              occupation="Student at NUML, Islamabad"
              description="Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level Front End Developer position. Ready to help team achieve company goals."
            />
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            Education
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <Card
              educationlevel="Bachelors"
              institution="National University of Modern Languages"
              description="Software Engineering (In Progress)"
            />
            <Card
              educationlevel="Intermediate"
              institution="F.G Liaquat Ali Degree College"
              description="I.C.S (Physics)"
            />
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Skills
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <Table />
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Certificates
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <Card
              educationlevel="Online Course"
              institution="Udemy"
              description="The Complete 2022 Web Development Bootcamp by Dr. Angela Yu (07/2021 - Present)"
            />
            <Card
              educationlevel="Online Course"
              institution="Udemy"
              description="React - The Complete Guide (incl Hooks, React Router, Redux) (02/2022 - Present)"
            />
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Achievements
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div className="card" style={mystyle}>
              <div className="card-body">
                <h5 className="card-title">Pair Programming Competition</h5>
                <h6 className="card-subtitle mb-2 text-muted">NUML</h6>
                <p className="card-text">Scored 1st Position at Senior Level</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
