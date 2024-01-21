import React from 'react'
import Hang_light from '../../images/hang_light.png'
import right_arrow from '../../images/chevron-right.png'
import Sofa from '../../images/sofa.png'
import Chair from '../../images/chair.png'


const Design = () => {
    return(
        <>
        <div className="container" >
            <div className="design_box_wraper">
                <div className="hanging_light" >
                        <img className="hang_light" src={Hang_light}/>
                        <div className="hanging_light_text_sec">
                            <h3>HANGING LIGHT</h3>
                            <p>Upgrade your space with our modern hanging light, featuring sleek lines, energy-efficient LED lighting, and adjustable height.</p>
                            <h4><a href="#">View more <img src={right_arrow}/></a></h4>
                        </div>
                </div>
                <div className="designed_sofa" >
                    <div className="designed_text_sec">
                        <h3>DESIGNED SOFA</h3>
                        <p>Introducing our newest sofa, the perfect combination of style and comfort, designed to elevate your living space and provide ultimate relaxation.</p>
                        <h4><a href="#">View more <img src={right_arrow}/></a></h4>
                    </div>
                    <img className="sofa" src={Sofa}/>
                </div>
                <div className="nova_chair" >
                    <div className="nova_text_sec">
                        <h3>NOVA CHAIR</h3>
                        <p>a stylish and comfortable addition to any room, with its sleek design and plush cushions creating the ultimate seating experience.</p>
                        <h4><a href="#">View more <img src={right_arrow}/></a></h4>
                    </div>
                    <img className="chair" src={Chair} />
                </div>
            </div>
        </div>    
        </>
    )
}
export default Design