import React from 'react'
export const Footer = (props) => {
    return (
        <div className="row my-2 " >
            <div className="col-9 mx-5">
                <div className="card w-50 ">
                    <div className="card-body" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : '#d0c0c059' }}>
                        <h5 className="card-title"><b>Total amount to be paid</b></h5>
                        <p className="card-text">{props.totalAmount}</p>
                        <a className="btn btn-primary mx-2" onClick={() => { props.reset() }}>Reset</a>
                        <a className="btn btn-primary mx-2">Pay Now</a>
                    </div>
                </div>
            </div>
        </div>

    )
}