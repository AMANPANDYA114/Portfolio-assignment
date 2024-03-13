import React from 'react';

function Hero() {
  return (
   <div>
<div class="row mb-3">
  <div class="col-lg-6">
  <div className="card justify-content-center align-items-center mt-4 border-0" >
      <div class="card-body">
      <div className=' buttonadj border-0 mb-3' type="button">Hello!</div>

     <p className='para'>I'm <span className='anish'>Anish</span> 👋</p>
   <div>
   <h3 className='textmiddle'>UI/UX Designer, Front-End Developer & Thinker.
Based in India. </h3>
   </div>
        <div className='d-flex mt-5'>
      <button type="button" class="btn btn-primary me-0 btn1 border-0 me-3 mt-1">Download CV</button>
      <button type="button" class="btn btn-primary btn2 border-0 mt-1">Get in Touch</button>
      </div>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="card justify-content-center align-items-center mb-5 border-0" >
      <div class="card-body">
      


  

        <p className='ms-5 rot' style={{ marginTop: '30%' }}>


        {/* <div className="rotate mt-5 ms-5" style={{ position: 'relative', top: '100% !important' }}>
  shinahaanishkumar@outlook.com
</div> */}


      </p>
      
      <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Outer image */}
      <img src="https://i.postimg.cc/N0TK7grW/imageedit-8-7440476734.png" width="95%" style={{ display: 'block' }} alt="Outer Image" />

      {/* Inner image (positioned absolutely within the outer image) */}
      <img src="https://i.postimg.cc/FKfBT6rt/download-1-2.png" style={{ position: 'absolute', top: '40%', left: '35%', transform: 'translate(-50%, -50%)' }} alt="Inner Image" width="67%" height="" />
    

   
    </div>






      </div>
    </div>
  </div>
</div>


   </div>
  );
}

export default Hero;
