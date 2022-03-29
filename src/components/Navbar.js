import React from 'react'

export const Navbar = (props) => {
    return (

        <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode === 'dark' ? 'light' : 'dark'} text-${props.mode === 'dark' ? 'dark' : 'light'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ShopKart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}