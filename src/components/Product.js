import React from 'react'

export const Product = (props) => {
    return (
        <>
            <div className='row ' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <div className="col-1 align-self-center">
                    <span className="badge rounded-pill bg-primary">{props.index + 1}</span>
                </div>
                <div className="col-3 align-self-center" style={{ padding: "0px", margin: "2px" }} >
                    <strong> <h6 style={{ marginLeft: "15px",  fontSize: "1.2rem" }}>{props.product.name}<span className='badge bg-secondary my-2 ml-3 ' style={{ marginLeft: "5px" }}>₹{props.product.price}</span></h6></strong>
                </div>
                <div className="col-4 align-self-center" style={{ padding: "0px" }}>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className={`btn btn-outline-${props.mode=== 'dark'? 'light' : 'dark'}`} role="group" onClick={() => { props.decreaseQnty(props.index) }}>-</button>
                        <button type="button" className={`btn btn-outline-${props.mode=== 'dark'? 'light' : 'dark'}`}role="group" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.product.quantity}</button>
                        <button type="button" className={`btn btn-outline-${props.mode=== 'dark'? 'light' : 'dark'}`} role="group" onClick={() => { props.increaseQnty(props.index) }}>+</button>
                    </div>
                </div>
                <div className="col-2 align-self-center" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <button className="btn btn-success"style={{fontSize: "1.2rem"}}>{props.product.quantity * props.product.price}</button>
                </div>
                <div className="col-1 align-self-center" style={{ padding: "18px" }}>
                <i className="fa-solid fa-circle-minus "  style={{fontSize: "1.3rem", marginLeft:"0.95rem"}}onClick={() => { props.removeItem(props.index) }}></i>
                </div>
            </div>
        </>
    )
}
