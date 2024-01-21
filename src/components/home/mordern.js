import React from 'react'
import Star2 from '../../images/Star2.png'
import mordern_hang from '../../images/mordern_hang_light.png'
const Mordern = () =>{
    return(
        <>
        <div className="container">
            <div className="mordern_bax_wraper">
                <div className="morder_left_sec">
                    <h1>MORDERN BRONZE HANGING LIGHT</h1>
                    <img src={Star2} alt=""/>
                    <p><del>$3252.41</del></p>
                    <h1>$2352.41 <span>-30%</span></h1>
                </div>
                <img src={mordern_hang} alt="" />
                <div className="morder_right_sec">
                    <p>Stunning lighting fixture that combines contemporary style with timeless elegance. Featuring a sleek and minimalist design, this hanging light is crafted from high-quality bronze and finished with a smooth and lustrous surface.</p>
                    <button >BUY NOW</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Mordern