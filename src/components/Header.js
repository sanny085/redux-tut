  
import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Header(props) { 
    console.log("Header Props",props);
    console.log("Header length ",props.data);
 
    const removeEachValue = (each) =>  {
        return each.value;
    } 
 return (
  <>
        <div className="add-to-cart">
           <span className="cart-count">{props.data.cardData.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
        </div> 
         <Link to="/">Home</Link>
         <br/><br/> 
        {/*All map data*/}
           {
            props.data.cardData.map(each => (
            <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src= {each.value?.image} />
            </div>
            <div className="text-wrapper item">
                <span>
                    {each.value?.name}
                </span>
                <p>
                    {each.value?.price}
                </p>
            </div>
            <div className="btn-wrapper item">

                <button className="remove_item" onClick={()=> 
                        props.removeToCartHandler(removeEachValue(each))
                      } >Remove To Cart</button>
            </div>
            </div>
           ))
           
           }

  </>
  )
}
export default Header;