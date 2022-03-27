import React from 'react'

export const Product = (props) => {
    return (
        <>
            <div className='row conatiner' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="col-1">
                    <span className="badge rounded-pill bg-primary">{props.index + 1}</span>
                </div>
                <div className="col-3" >
                    <h5>{props.product.name}<span className='badge bg-secondary my-2 ml-3 mx-2'>₹{props.product.price}</span></h5>
                </div>
                <div className="col-3">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-outline-primary" role="group" onClick={() => { props.decreaseQnty(props.index) }}>-</button>
                        <button type="button" className="btn btn-outline-primary" role="group">{props.product.quantity}</button>
                        <button type="button" className="btn btn-outline-primary" role="group" onClick={() => { props.increaseQnty(props.index) }}>+</button>
                    </div>
                </div>
                <div className="col-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <button className="btn btn-success">{props.product.quantity * props.product.price}</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger" onClick={() => { props.removeItem(props.index) }}>Remove</button>
                </div>
            </div>
        </>
    )
}
