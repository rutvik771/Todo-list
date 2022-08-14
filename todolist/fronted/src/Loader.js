import React, { useState } from 'react'
import SyncLoader from "react-spinners/SyncLoader"

export const Loader = () => {
    
  let color = useState("#1B1C1C")
    const style = {
        position:"fixed",
        top:"50%",
        left:"50%",
        tranform:"translate(-50% , -50%)",

            
    };

  return (
    <div><SyncLoader css={style} color={color}/></div>
  )
}
