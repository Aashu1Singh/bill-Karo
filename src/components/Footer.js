import React from 'react'
export const Footer = (props) => {
    return (
        <>
            <div className="row my-2 " >
                {/* <div className="col-5"> */}
                <div className="card w-50" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : '#d0c0c059', border: "1px solid" }} >
                    <div className="card-body" >
                        <h5 className="card-title"><b>Total amount to be paid</b></h5>
                        <p className="card-text">{props.totalAmount}</p>
                        <a className="btn btn-warning mx-2 my-1" onClick={() => { props.reset() }}><strong style={{ color: "black" }}>Reset Total Amount</strong> </a>
                        <a className="btn btn-success mx-2 my-1">Pay Now</a>
                    </div>
                    {/* </div> */}
                </div>
                {/* <div className="col-5"> */}
                <div className="card w-50" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : '#d0c0c059', border: "1px solid" }}>
                    <div className="card-body">
                        <h2 className="card-title"><b>ShopKart</b></h2>
                        <p className=" card-text my-1">~Aashu Singh</p>
                        <p className=" card-text my-1"><strong>Thank You for visiting</strong> </p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}