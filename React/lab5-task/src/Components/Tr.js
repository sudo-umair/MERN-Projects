import React from 'react'
import Progress from './Progress';

export default function Tr(props) {
  return (
    <tr>
      <td>{props.skill}</td>
      <td>
        <Progress value={props.value} />
      </td>
    </tr>
  );
}
