import React from 'react'
import { Link } from 'react-router-dom'

export const Contain = () => {
  return (
    <div>
    <header id="header" className="header">
    <div className="header-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5">
            <div className="text-container">
              <h1>Organize your Day</h1>
              <p className="p-large">Use Todo list for Maintain Our Day-to-day Tasks or List Everything that We have to do</p>


              <Link className="btn-solid-lg page-scroll" to="todolist">Add New..  </Link>

              
            </div> {/* end of text-container */}
          </div> {/* end of col */}
          <div className="col-lg-6 col-xl-7">
            <div className="image-container">
              <div className="img-wrapper">
                <img className="img-fluid" src="assets1/images/header-software-app.png" alt="alternative" />
              </div> {/* end of img-wrapper */}
            </div> {/* end of image-container */}
          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </div> 
   
  </header>
  <svg className="header-frame" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 310"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#5f4def;}" }} /></defs><title>header-frame</title><path className="cls-1" d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z" /></svg>
  {/* end of header */}
  </div> 
  )
}
