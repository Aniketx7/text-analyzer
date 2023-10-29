import React from 'react'

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >  {/*props.mode ke jagah pe light ya dark hoga (bootstrap class*/}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={() => { props.toggleTheme('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>

                        <div className="bg-success rounded mx-2" onClick={() => { props.toggleTheme('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    </div>


                    <div className="d-flex" role="search" >
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleStyle} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark mode</label>
                        </div>
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {        //proptype define which type of varible would pass 
    title: PropTypes.string.isRequired,
    nav1: PropTypes.string.isRequired
}

Navbar.defaultProps = {        //defaultProps, agar passed variable ka value assign nahi kiya hai to ye aa jayega 
    title: 'Page Title',
    nav1: 'nav Link'
}

