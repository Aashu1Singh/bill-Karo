import React from 'react'
export const BillPage = (props) => {
    return (
        <>
            <div className="coontainer text-align-center" style={{fontSize: "1.1rem"}} >
                {/* <div className="col-5"> */}
                <div className="card w-50" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white', border: "2px solid" }} >
                    <div className="card-body" >
                        <h5 className="card-title"><b>Total amount to be paid</b></h5>
                        <p className="card-text">{props.totalAmount}</p>
                        <p className="btn btn-warning mx-2 my-1" onClick={() => { props.reset() }}><strong style={{ color: "black" }}>Reset Quantity</strong> </p>
                        <p className="btn btn-success mx-2 my-1">Pay Now</p>
                    </div>
                </div>
                {/* <div className="card w-50" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white', border: "2px solid" }}>
                    <div className="card-body d-flex align-items-center cardBodyCenter">
                        <div className='container'>
                        <p className="card-title"><b>BIllKaro</b></p>
                        <p className=" card-text ">~Aashu Singh</p>
                        <p className=" card-text "><strong>Thanks for visiting</strong> </p>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* </div> */}
        </>
    )
}