import React, { useState , useEffect} from "react";
import Banner from "../components/home/banner";
import plus from "../images/plus.png";
import minus from "../images/minus.png";
import downarrow from "../images/chevron-down.png";
// import proshop from "../components/json/shop_right.json";
import Star2 from '../images/Star2.png'
import mordern_hang from '../images/mordern_hang_light.png'
import menu from '../images/menu_shop.png'
import explor from '../images/explor_shop.png'
import aroleft from '../images/arrow-left.png'
import aroright from '../images/arrow-right.png'
const Shop = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);

  let [proshop, setproshop] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  let getProduct = async () => {
    let proshop = await fetch("http://localhost:3500/product/findall")
      .then((res) => res.json())
      .then((data) => {setproshop(data.result);});
  };

  return(
    <>
      <Banner />
      <div className="container">
        <div className="shop_box_wraper">
          <div className="shop_category_sec">
            <h2>CATEGORY</h2>
            <h3 onClick={() => {setActive(!active);}}>
    FURNITURE <img src={active == false ? plus : minus} alt="" />
            </h3>
            {active === true && (
              <ul>
                <li>Chair</li>
                <li>Sofa</li>
                <li>Couch</li>
                <li>Desk</li>
                <li>Lamp</li>
              </ul>
            )}
            <h3
              onClick={() => {
                setActive2(!active2);
              }}
            >
              SHIPPING <img src={active2 == false ? plus : minus} alt="" />
            </h3>
            {active2 === true && (
              <ul>
                <li>India</li>
                <li>Canada</li>
                <li>Australia</li>
                <li>United States</li>
                <li>France</li>
              </ul>
            )}
            <h3
              onClick={() => {
                setActive3(!active3);
              }}
            >
              ALL PRODUCT <img src={active3 == false ? plus : minus} alt="" />
            </h3>
            {active3 === true && (
              <ul>
                <li>Chair</li>
                <li>Sofa</li>
                <li>Couch</li>
                <li>Desk</li>
                <li>Lamp</li>
              </ul>
            )}
            <h2>SHOP BY</h2>
            <h3
              onClick={() => {
                setActive4(!active4);
              }}
            >
              MATERIALS <img src={active4 == false ? plus : minus} alt="" />
            </h3>
            {active4 === true && (
              <ul className="material_list">
                <li>
                  Bronze<span>(08)</span>
                </li>
                <li>
                  Oak wood<span>(12)</span>
                </li>
                <li>
                  Stainless metal<span>(36)</span>
                </li>
                <li>
                  Titanium<span>(04)</span>
                </li>
                <li>
                  Alloy<span>(08)</span>
                </li>
                <li>
                  Ceramic<span>(17)</span>
                </li>
              </ul>
            )}
            <h3
              onClick={() => {
                setActive5(!active5);
              }}
            >
              PRICE <img src={active5 == false ? plus : minus} alt="" />
            </h3>
            {active5 === true && (
              <div className="price_down">
                <input className="range" type="range" />
                <div className="apply">
                  <input type="text" placeholder="$0 - $2000" />
                  <button>Apply</button>
                </div>
              </div>
            )}
            <h3
              onClick={() => {
                setActive6(!active6);
              }}
            >
              SIZE <img src={active6 == false ? plus : minus} alt="" />
            </h3>
            {active6 === true && (
              <ul className="size_list">
                <li>
                  S<span>(08)</span>
                </li>
                <li>
                  M<span>(12)</span>
                </li>
                <li>
                  L<span>(36)</span>
                </li>
              </ul>
            )}
            <h3
              onClick={() => {
                setActive7(!active7);
              }}
            >
              COMPARE <img src={active7 == false ? plus : minus} alt="" />
            </h3>
            {active7 === true && (
              <p>
                Lorem ipsum dolor sit amet consectetur. Bibendum iaculis velit
                dolor id.
              </p>
            )}
          </div>
            <div className="shop_result_sec">
                <h2>RESULT FOR “ FURNITURE ”</h2>
                <div className="shop_right_uppersec">
                  <div className="shop_upper_buttons">
                    <button className="sale_btn">ON SALE</button>
                    <button className="default_btn">Short by:Defaul <img src={downarrow} alt="" /></button>
                  <div className="shop_up_right_btns">
                    <button><img src={menu} alt="" /></button>
                    <button><img src={explor} alt="" /></button>
                  </div>
                  </div>
                  <div className="shop_right_uppersec">
                    <p>SHOWED 1 - 9 OF 30 PRODUCTS</p>
                  </div>
                </div>
                <div className="shop_right_downsec">
                {proshop.map((item, index) => {
                    return (
                    <>
                        <div className="shop_details">
                        <div>
                            <img className="main_image" src={`http://localhost:3500/static/${item["image"]}`}/>
                            <h3>{item["name"]}</h3>
                            <img className="starim_g" src={require(`../images/Star2.png`)}/>
                            <p>{item["price"]}</p>
                        </div>
                        </div>
                    </>
                    );
                })}
                </div>
                
                <div className="shop_bronz">
                    <div className="shop_bronz_sec">
                        <h1>MORDERN BRONZE HANGING LIGHT</h1>
                        <img src={Star2} alt="" />
                        <p><del>$3252.41</del></p>
                        <h1>$2352.41 <span>-30%</span></h1>
                    </div>
                    <img src={mordern_hang} alt="" />
                </div>
                <div className="shop_last_sec">
                  <div className="shop_last_left">
                      <button className="shop_last_first_btn">01</button>
                      <button>02</button>
                      <button>03</button>
                      <button><img src={aroleft} alt="" /></button>
                      <button className="shop_last_first_btn"><img src={aroright} alt="" /></button>
                  </div>
                  <div className="shop_last_right">
                      <p>SHOWED 1 - 9 OF 30 PRODUCTS</p>
                  </div>
                </div>
             </div>
        </div>
      </div>
    </>
)}

export default Shop;
