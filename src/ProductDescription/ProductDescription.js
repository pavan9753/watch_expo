import React from 'react'
import './ProductDescription.css'
const productDescription = (props) => {

  const arr=props.data.options.map((item,pos)=>
  {
    
      // <h2> great</h2>
      if(pos===props.pos)
      {
         return <img src={item.imageUrl} className='productImage productSelected' alt={item.styleName}
         onClick={()=>props.imageclick(pos)}/>
      }
      else 
       return <img src={item.imageUrl} className='productImage' alt={item.styleName}
       onClick={ ()=>props.imageclick(pos)
        
        
        
      }/>
    
  })

  const arr1=props.data.featureList.map((item,pos)=>
  {
    
      // <h2> great</h2>
      if(pos===0) return <button id='time' onClick={()=>props.buttonclick(pos)}> {props.data.featureList[0]}</button>
      
     else return <button id='heartrate' onClick={()=>props.buttonclick(pos)}> {props.data.featureList[1]}</button>
    
  })

  return (
    <div className='productData'>
        <h1 className='head'>{props.data.title}</h1>
        <p className='productDescription'>{props.data.description}</p>
        
        
        <h3 class='sectionHeading'>Select   Color</h3>
        <div className='productContainer'>
       {arr}
       
                {/* <img src={props.data.options[0].imageUrl} className='productImage productSelected'></img>
               
                <img src={props.data.options[1].imageUrl} className='productImage'></img>
                <img src={props.data.options[2].imageUrl} className='productImage'></img>
                <img src={props.data.options[3].imageUrl} className='productImage'></img> */}
                
         </div>
         <h3 class='sectionHeading'>Features</h3>
         <div className='buttonContainer'>
         {/* {arr1} */}
          <button id='time' > {props.data.featureList[0]}</button>
      
     <button id='heartrate' > {props.data.featureList[1]}</button>
              
         </div>
        <button className='buy'>Buy Now</button>

        </div>
  )
}

export default productDescription