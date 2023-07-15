import React from 'react'
import {useParams} from "react-router-dom"
const Coin = ({name,symbol,imgSrc,price}) => {
    // const params = useParams();
  return (
    <div className='coin'>
      {/* <h1>#{params.id}</h1> */}
      <img src={imgSrc} alt={name} />
      <h1>{symbol}</h1>
      <p>{name}</p>
      <h4>₹{price}</h4>
    </div>
  )
}

export default Coin
