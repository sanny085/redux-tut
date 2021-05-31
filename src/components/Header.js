  
import React from 'react'

function Header(props) {
    console.log("Header Props",props);

    console.log("Header length ",props.data);
 return (
  <>
        <div className="add-to-cart">
           <span className="cart-count">{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
         </div>  
        {/*All map data*/}
           {props.data.map(eachData => (
            <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src= {eachData.cardData?.image} />
            </div>
            <div className="text-wrapper item">
                <span>
                    {eachData.cardData?.name}
                </span>
                <p>
                    {eachData.cardData?.price}
                </p>
            </div>
            <div className="btn-wrapper item">

                <button className="remove_item" onClick={()=> 
                        props.removeToCartHandler({eachData})
                      } >Remove To Cart</button>
            </div>
            </div>
           ))
           
           }

  </>
  )
}
export default Header;