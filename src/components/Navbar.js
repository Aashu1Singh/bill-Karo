import React from 'react'
// import NavHr from './NavHr'

export const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top navbarProp navbar-${props.mode=== 'dark'? 'light' : 'dark'} bg-${props.mode=== 'dark'? 'light' : 'dark'}`}>
                <div className="container-fluid">
                    <span className="navbar-brand navTitle">Bill-Karo</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-sliders " style={{fontSize:"1.6rem"}}></i>
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
                    <form class={`d-flex  text-${props.mode=== 'dark'? 'dark' : 'light'}`} style={{fontSize:"1rem"}}>
                            <div>
                                <label className="form-check-label " htmlFor="flexSwitchCheckDefault" style={{paddingLeft: "21px", paddingRight: "7px"}}>Dark Mode</label>
                            </div>
                        <div className={`form-check form-switch `} id="navbarSupportedContent">
                            <input className="form-check-input" type="checkbox"  onClick={props.toggleMode} role="switch" />
                        </div>
                    </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
