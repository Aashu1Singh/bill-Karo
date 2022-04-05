import React from 'react'
// import NavHr from './NavHr'

export const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top navBackcolor text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand navTitle" href="/">Bill-Karo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-sliders fa-2x"></i>
                        {/* <span class="navbar-toggler-icon"></span> */}
                    </button>
                    <div className="collapse navbar-collapse nav-menu navCenter" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active nav-menu-a" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active nav-menu-a" href="/">Download</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active nav-menu-a" href="/">Contact</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <div className="form-check form-switch  " id="navbarSupportedContent">
                                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" />
                                <div>
                                    <label className="form-check-label blackColor" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                                </div>
                            </div>
                        </form>
                        {/* <div className="form-check form-switch blackColor " id="navbarSupportedContent">
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" />
                            <div>
                                <label className="form-check-label blackColor" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                            </div>
                        </div> */}
                    </div>
                </div>
            </nav>






            {/* <div className=' fixed-top'>
                 <NavHr />
             </div> */}
        </>
    )
}
