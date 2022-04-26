import React from 'react'

const Footer = (props) => {
    return (
        <div className={` container-fluid `} style={{ color: props.mode === 'dark' ? 'black' : 'white', backgroundColor: props.mode === 'dark'? 'white': 'black' }}  id='footer'>
            <div className='container'>
                <h3 style={{paddingTop: '20px'}}>Bill-Karo</h3>
            </div>
            <div className={`container `}>
            <hr />

            <div className='my-1 row'>
                <div className='col-4 col-lg-1 col-md-2'>About      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|</div>
                <div className='col-8 col-lg-11 col-md-10'> This is a single page application used to make bills of items you purchased anywhere</div>
            </div>
            <div className='my-1 row'>
                <div className='col-4 col-lg-1 col-md-2'>Contact    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</div>
                <div className='col-8 col-lg-11 col-md-10'> Customer-Care Web-Developer</div>
            </div>
            <div className='my-1 row'>
                <div className='col-4 col-lg-1 col-md-2'>Connect    &nbsp;&nbsp;&nbsp;&nbsp;|</div>
                <div className='col-8 col-lg-11 col-md-10'>
                <span>  Email newsletter </span>
                <span> <i class="fa-brands fa-facebook mx-2"> facebook</i></span>
                <span> <i class="fa-brands fa-twitter mx-2"> twitter</i></span>
                <span> <i class="fa-brands fa-google mx-2"> google</i></span>
                <span> <i class="fa-brands fa-instagram mx-2"> instagram</i></span>
                </div>
            </div>
            <hr />
            </div>
            <div className={`my-1 container `}>
                <span>&#169; Copyright 2022 Hindustan </span>
            </div>
        </div>
    )
}

export default Footer