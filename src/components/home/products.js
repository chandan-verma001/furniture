import React from 'react'
import Prod from '../json/product.json'
const Product = () => {
    return(
        <>
        <div className="cintainer">
            <div className="product_box_wraper">
                <h1>FEATURED PRODUCTS</h1>
                <div className="product_links">
                    <p><span>ALL</span></p>
                    <p>ON SALE</p>
                    <p>SOFA</p>
                    <p>HANGING LIGHTS</p>
                </div>
                <div className="product_logo">
                    
                    {
                    Prod.map((item,index) => {
                        return(
                            <>
                             <div className="product_details">
                                <div>
                                    <img src={require(`../../images/${item["product-img"]}`)} alt="" />
                                    <h3>{item["product-heading"]}</h3>
                                    <img src={require(`../../images/${item["product-star"]}`)} alt="" />
                                    <p>{item["product-price"]}</p>
                                </div>
                             </div>
                            </>
                        )
                    })}
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Product