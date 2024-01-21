import React from 'react'
import logo from '../json/brand.json'

const Trusted = () => {
    return (
        <>
        <div className="container">
            <div className="trusted_box_wraper">
                <h1>TRUSTED BY</h1>
                <div className="trusted_company">
                    {
                        logo.map((elm,ind)=>{
                            return(
                                <>
                                    <img src={require(`../../images/${elm.logo}`)} alt=""/>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default Trusted