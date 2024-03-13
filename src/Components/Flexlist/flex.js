import React from 'react';

function Flex() {
  return (
    <div className='container rt'>

      <div class="d-flex justify-content-center justify-content-md-start bd-highlight mb-3 mt-1">
        <div class="p-2 bd-highlight">
          <ul className="l list-unstyled mt-5 ms-5 icons" style={{ marginLeft: '-43%' }}>
            <li className="text-center mb-1 ic">
              <i className="fab fa-facebook-f text-center ps-2 pe-2 pb-2 pt-2 mb-1 lb" style={{ fontSize: "10px", width: '30px' }}></i>
            </li>
            <li className="text-center mb-1 ic">
              <i className="fa-brands fa-instagram text-center ps-2 pe-2 pb-2 pt-2 lb"></i>
            </li>
            <li className="text-center mb-1 ic">
              <i className="fa-brands fa-twitter text-center ps-2 pe-2 pb-2 pt-2 lb"></i>
            </li>
            <li className="text-center mb-1 ic">
              <i className="fa-brands fa-linkedin-in text-center ps-2 pe-2 pb-2 pt-2 lb"></i>
            </li>
            <li className="text-center mb-1 ic">
              <i className="fab fa-telegram text-center ps-2 pe-2 pb-2 pt-2 lb" style={{ backgroundColor: 'white' }}></i>
            </li>
            <li className="text-center mb-1 ic">
              <i className="fab fa-github text-center ps-2 pe-2 pb-2 pt-2 lb"></i>
            </li>
          </ul>
        </div>
        <div class="p-2 bd-highlight">
        </div>
      </div>
    </div>
  );
}

export default Flex;




