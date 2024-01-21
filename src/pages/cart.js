import icon1 from '../images/cart_Icon1.png'
import icon2 from '../images/cart_Icon2.png'
import icon3 from '../images/cart_Icon3.png'
import icon4 from '../images/cart_Icon4.png'
import React from "react";
import item1 from '../images/cart_item1.png'
import item2 from '../images/cart_item2.png'
import item3 from '../images/cart_item3.png'
const Cart = ()=>{
    return(
        <>
        <div className="container">
            <div className="cart_box_wraper">
                <div className="cart_upper_sec">
                    <h1>SHOPING CART</h1>
                    <p>THIS IS YOUR CART BASED ON WHAT YOU WANTED TO BY</p>
                    <input type="range" />
                    <div className="cart_information">
                        <div>
                            <img src={icon1} alt="" />
                            <h4>CART</h4>
                            <h5>Review all your product and edit the number.</h5>
                        </div>
                        <div>
                            <img src={icon2} alt="" />
                            <h4>CUSTOMER INFORMATION</h4>
                            <h5>Add your name, phone number and address.</h5>
                        </div>
                        <div>
                            <img src={icon3} alt="" />
                            <h4>SHIPPING & PAYMENT</h4>
                            <h5>With many payment method, included yours.</h5>
                        </div>
                        <div>
                            <img src={icon4} alt="" />
                            <h4>REVIEW</h4>
                            <h5>View all your information before the confimation.</h5>
                        </div>
                    </div>
                </div>
                <div className="cart_middle_sec">
                    <div className="cart_items">
                        <div>
                            <img src={item1} alt="" />
                            <div className="cart_item_center">
                                <h3></h3>                                
                                <img src="" alt="" />
                                
                            </div>
                            <div className="cart_item_right">

                            </div>
                        </div>
                        <div>
                            <img src={item2} alt="" />
                            <div className="cart_item_center">
                                <h3></h3>    
                                <img src="" alt="" />
                                
                            </div>
                            <div className="cart_item_right">

                            </div>
                        </div>
                        <div>
                            <img src={item3} alt="" />
                            <div className="cart_item_center">
                                <h3></h3>    
                                <img src="" alt="" />
                                
                            </div>
                            <div className="cart_item_right">

                            </div>
                        </div>
                    </div>
                    <div className="cart_total">

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Cart