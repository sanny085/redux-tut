  
import React from 'react'
import {
    Link
  } from "react-router-dom";


function Home(props) {
    console.log("Home Props",props);

    console.log("Home length ",props.data);
    return (
        <div>
           <div className="add-to-cart">
            <Link to="/header">
             <span className="cart-count">{props.data.length}</span>
                 <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />

             </Link>
           </div>  



            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://3.bp.blogspot.com/-X9kbAWv7xbY/WeRGs4OVR_I/AAAAAAAAGHQ/B9jrJhxotzo05R-Jb7egIhz8syZa5lBwACLcBGAs/s1600/iPhoneX.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <p>
                        Price: $1000.00
                    </p>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>
                        props.addToCartHandler({
                            image:'https://3.bp.blogspot.com/-X9kbAWv7xbY/WeRGs4OVR_I/AAAAAAAAGHQ/B9jrJhxotzo05R-Jb7egIhz8syZa5lBwACLcBGAs/s1600/iPhoneX.png',
                            price: 1000, 
                            name:'I-Phone'})
                      }>Add To Cart</button>

                    <button className="remove_item" onClick={()=> 
                        props.removeToCartHandler()
                      }>Remove To Cart</button>
                </div>
            </div>
            
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                       Apple IPhone 12 
                    </span>
                    <p>
                        Price: $2000.00
                    </p>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>
                        props.addToCartHandler({
                            image:'https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg',
                            price: 2000, 
                            name:'Apple IPhone 12'})
                      }>Add To Cart</button>

                    <button className="remove_item" onClick={()=> 
                        props.removeToCartHandler()
                      }>Remove To Cart</button>
                </div>
            </div>





        </div>
    )
}
export default Home;