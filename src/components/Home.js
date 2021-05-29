  
import React from 'react'

function Home(props) {
    return (
        <div>
           
           <div className="add-to-cart">
           <span className="cart-count">{ }</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
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
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;