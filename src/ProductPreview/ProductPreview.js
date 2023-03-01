import React from 'react'
import './ProductPreview.css'
const productPreview = (props) => {

    const hour=new Date().getHours()>9?new Date().getHours():'0'+new Date().getHours();
  const minute=new Date().getMinutes()>9?new Date().getMinutes():'0'+new Date().getMinutes();
  return (
    <div className='productPreview'>
    <img src={props.image}></img>
  
   {props.value?<div className='timeSection'>
    <p>{`${hour}:${minute}`}</p>
  </div>
  :<div className='heartSection'>
  <i class="fa fa-heart" ></i>
  </div>
  }
  
  
  
  </div>
  )
}

export default productPreview