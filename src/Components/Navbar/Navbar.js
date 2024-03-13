import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white mb-5">
        <div className="container-fluid">
          <a className="navbar-brand ms-4 fs-sm-1 " href="#" style={{ fontWeight: 700 }}>
            <img className='me-3' src='https://i.postimg.cc/Kv99636y/Logo.png' width='21px'/>
            <span className="d-none d-sm-inline">ANISH KUMAR SINHA</span>
            <span className="d-inline d-sm-none" style={{ fontSize: "10px" }}>ANISH KUMAR SINHA</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Removed Dropdown */}
            </ul>

            <ul className="list-unstyled d-md-flex d-sm-block justify-content-between justify-content-center-sm text-center text-md-start itemnav">
              <li className='me-md-5'>Home</li>
              <li className='me-md-5'>About</li>
              <li className='me-md-5'>Resume</li>
              <li className='me-md-5'>Skills</li>
              <li className='me-md-5'>Projects</li>
              <li className='me-md-5'>Contact</li>
              <li className='me-md-5'><img src='https://i.postimg.cc/d3PGgr36/Moon-Black.png'/></li>
            </ul>
          </div>
        </div>
      </nav>


      {/*  */}


    </div>
  );
}

export default Navbar;
