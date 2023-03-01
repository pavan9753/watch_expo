import logo from './logo.svg';
import './App.css';
// import image from './download.png'
import Product from './Product';
import Topbar from './Topbar/Topbar';
import ProductPreview from './ProductPreview/ProductPreview';
import data from './data';
import './product.css';
import React from 'react'
import ProductDescription from './ProductDescription/ProductDescription';

class App extends React.Component {
  
    state=
    {
      data:data,
      image:'https://imgur.com/iOeUBV7.png',
      value:false,
      pos:0
    }

    buttonclick=(pos)=>
    {
      const upurl=pos===0?true:false;
      this.setState({
        value:upurl
      })
    }

    imageclick=(pos)=>
    {
      const upval=this.state.data.options[pos].imageUrl;
      this.setState({
        image:upval,
        pos:pos
      })
    }

    ff=document.querySelectorAll("div")
    
    render()
  {
    console.log(this.ff)
 
  return(
    
    <div className="App">
        <Topbar/>

      <div className='mainContainer'>
        <ProductPreview value={this.state.value} image={this.state.image}/>
        <ProductDescription data={this.state.data} pos={this.state.pos} imageclick={this.imageclick} buttonclick={this.buttonclick}/>
        

      </div>

    </div>
  );
  }
}


export default App;
