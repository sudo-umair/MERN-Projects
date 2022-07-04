import React from 'react'

export default function Button(props) {
  return (
    <button type="button" className={`btn btn-primary ${props.className}`}  onClick={props.onClick}>
      {props.title}
    </button>
  )
}

Button.defaultProps = {
  title: 'Submit',
  onClick: () => {},
}