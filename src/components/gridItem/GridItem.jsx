import React from 'react'
import './gridItem.css';
import '../../assets/sri-lankan-leopard-yala.jpg'

const GridItem = ({ backgroundImage, title }) => {
    console.log(backgroundImage);
    // const style = {
    //   backgroundImage: `url(../../assets/sri-lankan-leopard-yala.jpg)`,
    // };
  
    return <div className="grid-item">
      <h3 className='grid-item-title'>{title}</h3>
    </div>;
  };   

export default GridItem