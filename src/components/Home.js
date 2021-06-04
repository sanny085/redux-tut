  
import React, {useState} from 'react'
import {
    Link
  } from "react-router-dom";

import {v4} from 'uuid';

function Home(props) {
    const [fProduct, setProduct] = useState([
       {
        image:'https://3.bp.blogspot.com/-X9kbAWv7xbY/WeRGs4OVR_I/AAAAAAAAGHQ/B9jrJhxotzo05R-Jb7egIhz8syZa5lBwACLcBGAs/s1600/iPhoneX.png',
        price: 1000, 
        name:'I-Phone',
        id : v4(),
       },
       {
         image:'https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg',
         price: 2000, 
         name:'Apple IPhone 12',
         id : v4(),
       },
       {
        image:'https://3.bp.blogspot.com/-X9kbAWv7xbY/WeRGs4OVR_I/AAAAAAAAGHQ/B9jrJhxotzo05R-Jb7egIhz8syZa5lBwACLcBGAs/s1600/iPhoneX.png',
        price: 1000, 
        name:'I-Phone',
        id : v4(),
       },
       {
         image:'https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg',
         price: 2000, 
         name:'Apple IPhone 12',
         id : v4(),
       },
       {
        image:'https://3.bp.blogspot.com/-X9kbAWv7xbY/WeRGs4OVR_I/AAAAAAAAGHQ/B9jrJhxotzo05R-Jb7egIhz8syZa5lBwACLcBGAs/s1600/iPhoneX.png',
        price: 1000, 
        name:'I-Phone',
        id : v4(),
       },
       {
         image:'https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg',
         price: 2000, 
         name:'Apple IPhone 12',
         id : v4(),
       },
       {
        image:'https://3.bp.blogspot.com/-X9kbAWv7xbY/WeRGs4OVR_I/AAAAAAAAGHQ/B9jrJhxotzo05R-Jb7egIhz8syZa5lBwACLcBGAs/s1600/iPhoneX.png',
        price: 1000, 
        name:'I-Phone',
        id : v4(),
       },
       {
         image:'https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg',
         price: 2000, 
         name:'Apple IPhone 12',
         id : v4(),
       }
    ]);
    
    console.log("Home Props",props);
    console.log("Home length ",props.data);

    return (
        <div>
           <div className="add-to-cart">
            <Link to="/header">
             <span className="cart-count">{props.data.cardData.length}</span>
                 <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />

             </Link>
           </div>  

            <h1>Home Component</h1>
              {
                fProduct.map( value => 
                (<>
                <div className="cart-wrapper" key={value}>
                <div className="img-wrapper item">
                    <img src={value.image} />
                </div>
                <div className="text-wrapper item">
                    <span>
                       {value.name}
                    </span>
                    <p>
                       {value.price}
                    </p>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>
                        props.addToCartHandler({
                           value
                            })
                      }>Add To Cart</button>

                 { 
                   /*<button className="remove_item" onClick={()=> 
                        props.removeToCartHandler({value})
                      }>Remove To Cart</button>*/
                 }

                </div>
              </div>
            </>
              ))
            }            
        </div>
    )
}

export default Home;

