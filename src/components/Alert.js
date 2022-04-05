import React from 'react'

function Alert(props) {
    return (
        <div className=' alert' style={{padding: 0}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{props.alert.msg}</strong>  
        </div>}
        </div>
    )
}

export default Alert