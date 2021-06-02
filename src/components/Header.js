  
import React,{ useState } from 'react'
import { Link } from 'react-router-dom'


function Header(props) {
    const [eachData, setEachData] = useState(props.data);
    console.log("Header Props",props);

    console.log("Header length ",props.data);
 return (
  <>
        <div className="add-to-cart">
           <span className="cart-count">{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
         </div> 
         <Link to="/">Home</Link>
         <br/><br/> 
        {/*All map data*/}
           {
            eachData.map(each => (
            <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src= {each.cardData?.value?.image} />
            </div>
            <div className="text-wrapper item">
                <span>
                    {each.cardData?.value?.name}
                </span>
                <p>
                    {each.cardData?.value?.price}
                </p>
            </div>
            <div className="btn-wrapper item">

                <button className="remove_item" onClick={()=> 
                        props.removeToCartHandler({id:each.cardData?.value?.id})
                      } >Remove To Cart</button>
            </div>
            </div>
           ))
           
           }

  </>
  )
}
export default Header;