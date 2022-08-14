import React from 'react'

export const Footer1 = () => {
  return (
    <div style={{paddingTop:"100px"}}>
  <svg className="footer-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 79"><defs><style dangerouslySetInnerHTML={{__html: ".cls-2{fill:#5f4def;}" }} /></defs><title>footer-frame</title><path className="cls-2" d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z" transform="translate(0 -0.188)" /></svg>
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="footer-col first">
            <h4>About Todolist</h4>
            <p className="p-small">We're passionate about designing and developing one of the best marketing apps in the market</p>
          </div>
        </div> {/* end of col */}
       
        <div className="col-md-6">
          <div className="footer-col last">
            <h4>Contact</h4>
            <ul className="list-unstyled li-space-lg p-small">
              <li className="media">
                <i className="fas fa-map-marker-alt" />
                <div className="media-body">22 Innovative, San Francisco, CA 94043, US</div>
              </li>
              <li className="media">
                <i className="fas fa-envelope" />
                <div className="media-body"><a className="white" href="mailto:contact@tivo.com">contact@todolist.com</a> <i className="fas fa-globe" /><a className="white" href="#your-link">www.todolist.com</a></div>
              </li>
            </ul>
          </div> 
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div>
</div>

  )
}
