import React from 'react'
import Tr from './Tr'

export default function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Skill Name</th>
          <th scope="col">Proficiency Level</th>
        </tr>
      </thead>
      <tbody>
        <Tr skill="Web Development" value="80" />
        <Tr skill="Android Development" value="40" />
        <Tr skill=".NET Framework Development" value="65" />
        <Tr skill="C, C++ and Java (Programming)" value="70" />
        <Tr skill="Database Programming (SQL)" value="60" />
        <Tr skill="Git and GitHub" value="40" />
        <Tr skill="UML Diagrams Modelling" value="80" />
      </tbody>
    </table>
  );
}
