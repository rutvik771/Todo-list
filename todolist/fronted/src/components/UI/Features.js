import React from 'react'

export const Features = () => {
  return (
    <div id="features" className="tabs">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
       
        <h2 className="h2-heading" style={{paddingBottom:"40px"}}>FEATURES</h2>
       
      </div> {/* end of col */}
    </div> {/* end of row */}
    <div className="row">
      <div className="col-lg-6">
      <div className="text-container">
          <h2 style={{color:"#5f4dee",paddingBottom:"20px"}}>Benefits</h2>
          
          <ul className="list-unstyled li-space-lg" style={{fontSize:"20px"}}>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">Tasks should be fast to add and organize</div>
            </li> 
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">There should be a variety of ways to organize the tasks</div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">Ability to plan your workflow</div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">Reminders for any self-imposed deadlines.</div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">Able to synch between different platforms</div>
            </li>
          </ul>
          
        </div> {/* end of text-container */}
      </div> {/* end of col */}
      <div className="col-lg-6">
        <div className="image-container">
          <img className="img-fluid" src="assets1/images/details.png" alt="alternative" />
        </div> {/* end of image-container */}
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>
 

  )
}
