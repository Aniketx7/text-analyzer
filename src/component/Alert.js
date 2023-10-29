import React from 'react'

export default function Alert(props) {
  return (
    <div className="container my-3" style={{height: "44px"}}>
      {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}: </strong>{props.alert.msg}
      </div>
      }
    </div>
  )
}
