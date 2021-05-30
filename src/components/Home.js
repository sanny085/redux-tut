  
import React from 'react'

function Home(props) {
    console.log("Home Props",props);

    console.log("Home length ",props.data);
    return (
        <div>
        

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
                        props.addToCartHandler({price: 1000, name:'I-Phone'})
                      }>Add To Cart</button>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://static.digit.in/default/8f325b4a56fc3bccf3ca9c954412a5db087cdb80.jpeg?tr=1200" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Apple iPhone 12
                    </span>
                    <p>
                        Price: $1000.00
                    </p>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>
                        props.addToCartHandler({price: 2000, name:'iPhone 12'})
                      }>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;