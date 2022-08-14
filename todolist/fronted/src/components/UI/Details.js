import React from 'react'

export const Details = () => {
  return (
   <div id="details" className="basic-1">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="text-container">
          <h2>Now Is The Time To Upgrade Your Time Management</h2>
          
          <ul className="list-unstyled li-space-lg"  style={{fontSize:"18px"}}>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">Traditionally, they’re written on a piece of paper or post-it notes and act as a memory aid.</div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">As technology has evolved we have been able to create to-do lists with excel spreadsheets, word documents,  email lists, todo list apps, Microsoft to do and google to-do list to name a few.</div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">You can use a to-do list  in your home and personal life, or in the workplace.</div>
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
