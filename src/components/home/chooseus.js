import React from 'react'
import Choose from '../json/choose.json'
const Chooseus = () => {
    return(
        <>
        <div className="container">
            <div className="choose_box_wraper">
                <h1>WHY CHOOSE US?</h1>
                <div className="global">
                    {
                        Choose.map((item,index)=>{
                            return(
                                <>
                                <div className="global_data">
                                    <img src={require(`../../images/${item["choose-img"]}`)} alt=""/>
                                    <h3>{item["choose-heading"]}</h3>
                                    <p>{item["choose-pera"]}</p>
                                </div>
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
export default Chooseus