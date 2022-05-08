import "./home.css"
import { Footer } from "../Footer/Footer";
export const Home = () => {
    return (
        <div className="homepage">

            <div className="container" style={{width: "100%"}}>
                <div className="cont">
                    <p className="kcolor">Your Shop Consultant is <a href="" className="hreftag1">SHOP Corporate Services</a></p>
                    {/* <div className="innerCont">
                 <p>You have:<input type="text" value ="$0.00 Cashback"/></p>
             <p className="k_color">Earn more <a href="" className="hreftag1">Invite your friends</a></p>  
             </div>     */}
                </div>
                <div className="cont1">
                    <p>$50,020,815 awarded in <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "30px" }} /></p>
                    {/* <p className="dollar"><i className="fa-solid fa-dollar-sign"></i></p> */}
                    <p style={{ fontSize: "30px" }}>Cashback!</p>
                </div>

                <div className="cont2">
                    <img className="land-image" src="https://img.shop.com/Image/homepage/usa-97541-mothers-day-banners-hero1651528563361.jpeg" alt="i" />
                </div>
                <div className="cont3">
                    <div className="featured" onClick={() => feature()}>
                        <p className="fontFam">Featured Product</p>
                        <img className="land-image1" src="https://img.shop.com/Image/280000/287800/287812/products/1897185769.jpg?size=600x600" alt="i" />
                        <p className="decorate">Buy Now</p>
                    </div>
                    <div className="Essential">
                        <p className="fontFam">Dr. Deedra Mason's Essential 9</p>
                        <img className="land-image1" src="https://img.shop.com/Image/homepage/us_eng_essential9_sq1616511735959.jpg" alt="i" />
                        <p className="decorate">View the Essential 9</p>
                    </div>
                    <div className="Stores">
                        <p className="fontFam">Featured One Cart Stores</p>
                        <div className="fstores">
                            <div className="stores-div">
                                <img className="stores-img" src="https://img.shop.com/Image/topbrands/nmlogos_135341.gif" alt="/" />
                            </div>
                            <div className="stores-div">
                                <img className="stores-img" src="https://img.shop.com/Image/topbrands/nmlogos_136706.gif" alt="/" />
                            </div>
                            <div className="stores-div">
                                <img className="stores-img" src="https://img.shop.com/Image/topbrands/nmlogos_135958.gif" alt="/" />
                            </div>
                            <div className="stores-div">
                                <img className="stores-img" src="https://img.shop.com/Image/topbrands/nmlogos_131565.gif" alt="/" />
                            </div>




                        </div>
                        <p className="decorate">See More Stores</p>
                    </div>
                    <div className="bitpay">
                        <img className="bit-image" src="https://img.shop.com/Image/homepage/shop-usa-93246-bitpay-qs1640620410762.jpg" alt="/" />
                    </div>
                </div>
                <div className="cont4">
                    <div>
                        <img className="l-image1" src="https://img.shop.com/Image/homepage/motives-usa-can-98330-moments-preorder-banners-sq-min1645723493692.jpeg" alt="/" />
                    </div>
                    <div>
                        <div className="gl-flex">
                            <div>
                                <img className='gl-image1' src="https://img.shop.com/Image/homepage/ShopAnnuity-US-eng-97900-balance-tea-banner-media1645719715197.jpeg" alt="/" />
                                <div className="lgl-flex">
                                    <h1>2% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                                    {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                                    <h1>Cashback</h1>
                                </div>

                            </div>
                            <div>
                                <img className='gl-image1' src="https://img.shop.com/Image/homepage/us-en-mycoadapt-banner-cs97902-mar221646762851555.jpeg" alt="/" />
                                <div className="lgl-flex">
                                    <h1>2%<img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                                    {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                                    <h1>Cashback</h1>
                                </div>
                            </div>
                            <div>
                                <img className='gl-image1' src="https://img.shop.com/Image/homepage/us-en-glutaq-banner-cs97143-mar221646762684465.jpeg" alt="/" />
                                <div className="lgl-flex">
                                    <h1>2% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                                    {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                                    <h1>Cashback</h1>
                                </div>
                            </div>
                            <div>
                                <img className='gl-image1' src="https://img.shop.com/Image/homepage/daily-green-usa-97146-banner-mar221646174610787.jpeg" alt="/" />
                                <div className="lgl-flex">
                                    <h1>2% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                                    {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                                    <h1>Cashback</h1>
                                </div>
                            </div>




                        </div>
                        <div className="gl-flex">
                            <div>
                                <img className='gl-image1' src="https://img.shop.com/Image/homepage/us-en-rastellis-healthyeating-banner-mar221646257801207.jpeg" alt="/" />
                                <div className="lgl-flex">
                                    <h1>9% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                                    {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                                    <h1>Cashback</h1>
                                </div>

                            </div>
                            <div>
                                <img className='gl-image1' src="https://img.shop.com/Image/homepage/shop-usa-98283-sa-brand-flushable-wipes-banner-media1645720051432.jpeg" alt="/" />
                                <div className="lgl-flex">
                                    <h1>2% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                                    {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                                    <h1>Cashback</h1>
                                </div>
                            </div>
                            <div>
                                <img className='gl-image1' src="https://img.shop.com/Image/homepage/us-en-overstock-freeshipping-banner-mp16771-mar221647018576687.png" alt="/" />
                                <div className="lgl-flex">
                                    <h1>2% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                                    {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                                    <h1>Cashback</h1>
                                </div>
                            </div>
                            <div>
                                <img className='gl-image1' src="https://img.shop.com/Image/homepage/us-en-bassproshops-50off-banner-mp16785-mar221647033655191.jpeg" alt="/" />
                                <div className="lgl-flex">
                                    <h1>4% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                                    {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                                    <h1>Cashback</h1>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="cont5">
                    <img className="l-circle" src="https://img.shop.com/Image/resources/homepage/shop-homepage-icon.svg" alt="/0/" style={{margin: "auto", display: "block"}}/>
                </div>
                <div className="cont6">
                    <h1 style={{ textAlign: "left", fontSize: "40px" }}>Hot New Products</h1>

                </div>
                <div className="cont7">
                    <h1>Two-Year Anniversary Collection</h1>
                    <div className="ann_col">
                        <div className="ann_colp">
                            <div className="ann-div">
                                <img className="ann-img" src="https://www.shop.com/feo-cdn/1/0/KQcWpTge8.webp" alt="/" />
                                <p className="k_color">EVIE-Curb Chain Necklace</p>
                                <h2>$79.95</h2>
                                <p>+$1.60/2% Cashback</p>
                                <p className="j_color">Free shipping with $99 orders</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://www.shop.com/feo-cdn/H/X/j1WEtD2g4.webp" alt="/" />
                                <p className="k_color">EMMA - Faceted Hoops</p>
                                <h2>$79.95</h2>
                                <p>+$1.60/2% Cashback</p>
                                <p className="j_color">Free shipping with $99 orders</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://www.shop.com/feo-cdn/M/u/veiBNQECY.webp" alt="img" />
                                <p className="k_color">EVIE-Curb Chain Bracelet</p>
                                <h2>$55.95</h2>
                                <p>+$1.12/2% Cashback</p>
                                <p className="j_color">Free shipping with $99 orders</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://www.shop.com/feo-cdn/t/_/u0u-Ts_zQ.webp" alt="img" />
                                <p className="k_color">Zane - Cuban Link Chain</p>
                                <h2>$179.95</h2>
                                <p >+$3.60/2% Cashback</p>
                                <p className="j_color">Free shipping with $99 orders</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://www.shop.com/feo-cdn/n/p/FZE824krw.webp" alt="img" />
                                <p className="k_color">STELLA - Pave Band Ring</p>
                                <h2>$79.95</h2>
                                <p>+$1.60/2% Cashback</p>
                                <p className="j_color">Free shipping with $99 orders</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://www.shop.com/feo-cdn/i/I/wL6DU2-F8.webp" alt="img" />
                                <p className="k_color">AVERY - Baguette Ear Crawlers</p>
                                <h2>$59.95</h2>
                                <p>+$1.20/2% Cashback</p>
                                <p className="j_color">Free shipping with $99 orders</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://www.shop.com/feo-cdn/R/L/a_8jXAep8.webp" alt="img" />
                                <p className="k_color">ENZO - Cable Line Bracelet </p>
                                <h2>$99.95</h2>
                                <p>+$2.00/2% Cashback</p>
                                <p className="j_color">Free shipping with $99 orders</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://www.shop.com/feo-cdn/O/O/RqBlJuWtM.webp" alt="/" />
                                <p className="k_color">BOWIE - Cuban Link Bracelet</p>
                                <h2>$84.95</h2>
                                <p>+$1.70/2% Cashback</p>
                                <p className="j_color">Free shipping with $99 orders</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://www.shop.com/feo-cdn/S/x/fs5J2vT-4.webp" alt="/" />
                                <p className="k_color">GAIA - V Shaped Baguette Ring</p>
                                <h2>79.95</h2>
                                <p>+$1.60/2% Cashback</p>
                                <p className="j_color">Free shipping with $99 orders</p>

                            </div>
                        </div>
                        <div>
                            <img className="ann_image" src="https://www.shop.com/feo-cdn/s/s/aZ6oJ-luE.webp" alt="/" />
                        </div>
                    </div>
                </div>
                <div className="cont8">
                    <div>
                        <img className="ad-img" src="https://www.shop.com/feo-cdn/e/5/LjQ4ycAdQ.webp" alt="/" />
                        <div className="lgl-flex">
                            <h1>9% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                            {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                            <h1>Cashback</h1>
                        </div>
                    </div>
                    <div>
                        <img className="ad-img" src="https://www.shop.com/feo-cdn/G/7/bPm_D1rt0.webp" alt="/" />
                        <div className="lgl-flex">
                            <h1>9% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                            {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                            <h1>Cashback</h1>
                        </div>
                    </div>
                    <div>
                        <img className="ad-img" src="https://www.shop.com/feo-cdn/Z/0/AsvGkQZBM.webp" alt="/" />
                        <div className="lgl-flex">
                            <h1>SHOP40</h1>

                        </div>
                    </div>
                    <div>
                        <img className="ad-img" src="https://www.shop.com/feo-cdn/Y/Y/J3Oz-KPms.webp" alt="/" />

                    </div>
                </div>
                <div className="cont9">
                    <h1 className="spring">Spring Essentials</h1>
                    <div className="spring-main1">
                        <div className="spring-div">
                            <img className="spring-img" src="https://www.shop.com/feo-cdn/c/1/uPL2RMc00.webp" alt="/" />
                            <h2 className="spring-word">SPRING FASHION</h2>
                        </div>
                        <div className="spring-div">
                            <img className="spring-img" src="https://www.shop.com/feo-cdn/G/6/8ZNWCup_c.webp" alt="/" />
                            <h2 className="spring-word">BEAUTY</h2>
                        </div>
                        <div className="spring-div" onClick={() => tees}>
                            <img className="spring-img" src="https://www.shop.com/feo-cdn/1/7/n4lDREZhg.webp" alt="/" />
                            <h2 className="spring-word">MEN'S GRAPHIC TEES</h2>
                        </div>
                        <div className="spring-div">
                            <img className="spring-img" src="https://www.shop.com/feo-cdn/f/3/qx2AhJToM.webp" alt="/" />
                            <h2 className="spring-word">MEN'S SHORTS</h2>
                        </div >
                        <div className="spring-div">
                            <img className="spring-img" src="https://www.shop.com/feo-cdn/9/d/111Ir9OZI.webp" alt="/" />
                            <h2 className="spring-word">WOMEN'S SANDALS</h2>
                        </div>
                        <div className="spring-div">
                            <img className="spring-img" src="https://www.shop.com/feo-cdn/v/l/GvKbzwPAE.webp" alt="/" />
                            <h2 className="spring-word">MEN'S SANDALS</h2>
                        </div>


                    </div>
                    <div>
                        <div className="spring-main2">
                            <div className="spring-div" onClick={() => oPlants}>
                                <img className="spring-img" src="https://www.shop.com/feo-cdn/c/r/UXMhwIpgo.webp" alt="/" />
                                <h2 className="spring-word">ARTIFICIAL PLANTS</h2>
                            </div>
                            <div className="spring-div">
                                <img className="spring-img" src="https://www.shop.com/feo-cdn/I/v/Fl-f-UFzw.webp" alt="/" />
                                <h2 className="spring-word">SPRING CLEANING</h2>
                            </div>
                            <div className="spring-div">
                                <img className="spring-img" src="https://www.shop.com/feo-cdn/2/6/3c5udpRco.webp" alt="/" />
                                <h2 className="spring-word">DRAWER ORGANISERS & TRAY</h2>
                            </div>
                            <div className="spring-div">
                                <img className="spring-img" src="https://www.shop.com/feo-cdn/3/Z/OksvR-mUE.webp" alt="/" />
                                <h2 className="spring-word">PATIO FURNITURE</h2>
                            </div >
                            <div className="spring-div">
                                <img className="spring-img" src="https://www.shop.com/feo-cdn/e/e/nvPK3X1jI.webp" alt="/" />
                                <h2 className="spring-word">BEDDING</h2>
                            </div>
                            <div className="spring-div">
                                <img className="spring-img" src="https://www.shop.com/feo-cdn/R/8/nPzdpdwlY.webp" alt="/" />
                                <h2 className="spring-word">CANDLES</h2>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="cont10">
                    <div>
                        <img className="ad-img" src="https://www.shop.com/feo-cdn/U/_/2c1tNmCcw.jpg" alt="/" />
                        <div className="lgl-flex">
                            <h1>9% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                            {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                            <h1>Cashback</h1>
                        </div>
                    </div>
                    <div>
                        <img className="ad-img" src="https://www.shop.com/feo-cdn/U/u/yynAUHbTA.jpg" alt="/" />
                        <div className="lgl-flex">
                            <h1>9% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                            {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                            <h1>Cashback</h1>
                        </div>
                    </div>
                    <div>
                        <img className="ad-img" src="https://www.shop.com/feo-cdn/M/8/DQBRotEro.webp" alt="/" />
                        <div className="lgl-flex">
                            <h1>9% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                            {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                            <h1>Cashback</h1>
                        </div>
                    </div>
                    <div>
                        <img className="ad-img" src="https://www.shop.com/feo-cdn/k/W/eldN9t8R4.webp" alt="/" />
                        <div className="lgl-flex">
                            <h1>9% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                            {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                            <h1>Cashback</h1>
                        </div>
                    </div>
                </div>
                <div className="cont11">
                    <h1>Best of Web Prices & Instant Cashback!</h1>
                    <div className="ann_col1">
                        <div className="ann_colp1">
                            <div className="ann-div">
                                <img className="ann-img" src="https://img.shop.com/Image/280000/289900/289927/products/1908032724.jpg?size=300x300" alt="/" />
                                <p className="nw-over">Bunny Rabbit Pattern Socks</p>
                                <h2>$9.00</h2>
                                <p>+$0.54/6% Cashback</p>
                                <p className="j_color">Free shipping with $35 orders</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://img.shop.com/Image/290000/291200/291221/products/1924591420.jpg?size=300x300" alt="/" />
                                <p className="nw-over">White Crystal Apple Iphone 13 Case - Sparkle Series Case with Halo</p>
                                <h2>$39.99</h2>
                                <p>+$0.80/2% Cashback</p>
                                <p className="j_color">Free shipping</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://img.shop.com/Image/280000/289000/289054/products/1913419776.jpg?size=300x300" alt="/" />
                                <p className="nw-over">Bunny Love Easter Gift Basket - Easter Bunny Basket</p>
                                <h2>$52.99</h2>
                                <p>+$1.59/3% Cashback</p>
                                <p className="j_color">Free shipping</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://img.shop.com/Image/280000/287800/287812/products/1897185769.jpg?size=300x300" alt="/" />
                                <p className="nw-over">Zulay Portable Blenders For Shakes And Smoothies - USB Rechargeable Portable</p>
                                <h2>$19.99</h2>
                                <p>+$1.20/6% Cashback</p>
                                <p className="j_color">Free shipping</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://img.shop.com/Image/280000/288700/288706/products/1908995749.jpg?size=300x300" alt="/" />
                                <p className="nw-over">Aerothotic Arcus Women's Lightweight EVA Slide Sandals</p>
                                <h2>$25.99</h2>
                                <p>+$1.60/6% Cashback</p>
                                <p className="j_color">Free shipping</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://img.shop.com/Image/280000/289300/289379/products/1904984759.jpg?size=300x300" alt="/" />
                                <p className="nw-over">Instant Read Stainless Steel Digital Meat and Poultry Thermometer</p>
                                <h2>$12.49</h2>
                                <p>+$1.20/6% Cashback</p>
                                <p className="j_color">Free shipping</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://img.shop.com/Image/280000/283000/283070/products/1852703144.jpg?size=300x300" alt="/" />
                                <p className="nw-over">Farmers's Market Wisconsin Cheese Blocks 7 pack - 7 oz each</p>
                                <h2>$26.98</h2>
                                <p>+$0.81/3% Cashback</p>
                                <p className="j_color">Free shipping</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://img.shop.com/Image/240000/248600/248698/products/1917494549.jpg?size=300x300" alt="/" />
                                <p className="nw-over">Lumiere de Vie® After Sun Glow & Renew - Limited EDition Special Bu8y One, Get One Free</p>
                                <h2>$39.95</h2>
                                <p>+$0.80/2% Cashback</p>
                                <p className="j_color">Free shipping with $99 orders</p>

                            </div>
                            <div className="ann-div">
                                <img className="ann-img" src="https://img.shop.com/Image/280000/284400/284458/products/1865396325.jpg?size=300x300" alt="/" />
                                <p className="nw-over">Costway 51 PCs Magnetic Tiles Building Blocks Set Kids</p>
                                <h2>$18.95</h2>
                                <p>+$1.14/6% Cashback</p>
                                <p className="j_color">Free shipping</p>

                            </div>
                        </div>
                        <div>
                            <img className="ann_image1" src="https://img.shop.com/Image/homepage/shop-usa-97717-best-of-web-600x600-img-min1643297975138.jpg" alt="/" />
                        </div>
                    </div>
                </div>
                <div className="cont12">
                    <h1 className="spring1">Featured Categores</h1>
                    <div className="spring-main3">
                        <div className="spring-div">
                            <img className="spring-img" src="https://img.shop.com/Image/260000/266700/266794/products/1920629487.jpg?size=400x400" alt="/" />
                            <h2 className="spring-word">WOMEN'S CLOTHING'</h2>
                        </div>
                        <div className="spring-div">
                            <img className="spring-img" src="https://img.shop.com/Image/240000/243400/243406/products/1871564145.jpg?size=400x400" alt="/" />
                            <h2 className="spring-word">MEN'S CLOTHING</h2>
                        </div>
                        <div className="spring-div">
                            <img className="spring-img" src="https://img.shop.com/Image/240000/248200/248295/products/1919935435.jpg?size=400x400" alt="/" />
                            <h2 className="spring-word">GIRL'S CLOTHING</h2>
                        </div>
                        <div className="spring-div">
                            <img className="spring-img" src="https://img.shop.com/Image/270000/274900/274929/products/1907370742.jpg?size=400x400" alt="/" />
                            <h2 className="spring-word">BOY'S CLOTHING</h2>
                        </div >
                        <div className="spring-div">
                            <img className="spring-img" src="https://img.shop.com/Image/270000/273200/273200/products/1899581989.jpg?size=400x400" alt="/" />
                            <h2 className="spring-word">ACCESSORIES</h2>
                        </div>
                        <div className="spring-div">
                            <img className="spring-img" src="https://img.shop.com/Image/240000/243400/243406/products/1922216435.jpg?size=400x400" alt="/" />
                            <h2 className="spring-word">SHOES</h2>
                        </div>


                    </div>
                    <div>
                        <div className="spring-main4">
                            <div className="spring-div">
                                <img className="spring-img" src="https://img.shop.com/Image/240000/243400/243406/products/1715279320.jpg?size=400x400" alt="/" />
                                <h2 className="spring-word">BEDDING</h2>
                            </div>
                            <div className="spring-div">
                                <img className="spring-img" src="https://img.shop.com/Image/240000/243500/243545/products/1910446952.jpg?size=400x400" alt="/" />
                                <h2 className="spring-word">KITCHEN & DINING</h2>
                            </div>
                            <div className="spring-div">
                                <img className="spring-img" src="https://img.shop.com/Image/280000/281900/281909/products/1842390513.jpg?size=400x400" alt="/" />
                                <h2 className="spring-word">ELECTRONICS </h2>
                            </div>
                            <div className="spring-div">
                                <img className="spring-img" src="https://img.shop.com/Image/240000/243300/243380/products/1436234961.jpg?size=750x750" alt="/" />
                                <h2 className="spring-word">BEAUTY</h2>
                            </div >
                            <div className="spring-div">
                                <img className="spring-img" src="https://images.shop.com/pim/13009/image_j/OPC-3.JPG" alt="/" />
                                <h2 className="spring-word">HEALTH and NUTRITION</h2>
                            </div>
                            <div className="spring-div">
                                <img className="spring-img" src="https://img.shop.com/Image/250000/250100/250199/products/1787558026.jpg?size=750x750" alt="/" />
                                <h2 className="spring-word">KIDS</h2>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="lux-ad">
                    <div className="lux-cl">
                        <img className="lux-cl1" src="https://img.shop.com/Image/homepage/us-en-sockapanda-15off-banner-mp16712-feb221645555767088.jpeg" alt="/" />
                        <div className="lgl-flex">
                            <h1>6% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                            {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                            <h1>Cashback</h1>
                        </div>
                        <h4 className="cl-align">15% off All Orders + Free Shipping on orders $35+. Use Code: BestGift15</h4>
                    </div>
                    <div className="lux-cl cl2">
                        <img className="lux-cl1 " src="https://img.shop.com/Image/homepage/us-en-luxlair-freeshipping-banner-mp166381638985152501.jpeg" alt="/" />
                        <div className="lgl-flex">
                            <h1>8% <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" style={{ width: "20px" }} /></h1>
                            {/* <p className="icon-a"><i className="size-fa fa-solid fa-dollar-sign"></i></p> */}
                            <h1>Cashback</h1>
                        </div>

                    </div>
                </div>
            </div>
             <div className="cont14">
                <h1>Stay Healthy with Essential 9!</h1>
                <div className="health_col">
                    <div className="health_colp1">
                        <div className="ann-div">
                            <img className="ann-img" src="https://img.shop.com/Image/210000/214100/214196/products/1604659974.jpg?size=300x300" alt="/" />
                            <p className="nw-over">Isotonix® Multivitamin Without Iron</p>
                            <h2>$24.95-$55.95</h2>
                            <p>+$1.12/2% Cashback</p>
                            <p className="j_color">Free shipping with $99 orders</p>

                        </div>
                        <div className="ann-div">
                            <img className="ann-img" src="https://img.shop.com/Image/210000/214100/214196/products/604981550.jpg?size=300x300" alt="/" />
                            <p className="nw-over">Isotonix® Activated B Complex</p>
                            <h2>$25.95-$54.50</h2>
                            <p>+$1.09/2% Cashback</p>
                            <p className="j_color">Free shipping with $99 orders</p>

                        </div>
                        <div className="ann-div">
                            <img className="ann-img" src="https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?size=300x300" alt="/" />
                            <p className="nw-over">Isotonix® Vitamin D with K2</p>
                            <h2>$33.50-$79.95</h2>
                            <p>+$1.60/2% Cashback</p>
                            <p className="j_color">Free shipping with $99 orders</p>

                        </div>
                        <div className="ann-div">
                            <img className="ann-img" src="https://img.shop.com/Image/270000/275200/275293/products/1730212451.jpg?size=300x300" alt="/" />
                            <p className="nw-over">Probiotics-10</p>
                            <h2>$36.95</h2>
                            <p>+$0.74/2% Cashback</p>
                            <p className="j_color">Free shipping with $99 orders</p>

                        </div>
                        <div className="ann-div">
                            <img className="ann-img" src="https://img.shop.com/Image/240000/243300/243382/products/978316780.jpg?size=300x300" alt="/" />
                            <p className="nw-over">NutriClean® Advanced Fiber Powder with Stevia</p>
                            <h2>$54.50</h2>
                            <p>+$1.09/2% Cashback</p>
                            <p className="j_color">Free shipping with $99 orders</p>

                        </div>
                        <div className="ann-div">
                            <img className="ann-img" src="https://img.shop.com/Image/210000/214100/214199/products/561800367.jpg?size=300x300" alt="/" />
                            <p className="nw-over">Heart Health™ Advanced Co-Q10 (Cardiovascular & Immune Support) </p>
                            <h2>$51.95</h2>
                            <p>+$1.04/2% Cashback</p>
                            <p className="j_color">Free shipping with $99 orders</p>

                        </div>
                        <div className="ann-div">
                            <img className="ann-img" src="https://img.shop.com/Image/210000/214100/214196/products/792868342.jpg?size=300x300" alt="/" />
                            <p className="nw-over">Isotonix® Magnesium</p>
                            <h2>$41.95</h2>
                            <p>+$0.84/2% Cashback</p>
                            <p className="j_color">Free shipping with $99 orders</p>

                        </div>
                    </div>
                    <div>
                        <img className="health-img" src="https://img.shop.com/Image/homepage/us_eng_essential9_sq1616511735959.jpg" alt="/" />
                    </div>
                </div>
            </div>
            <div className="cont15">
                <h2 className="top_head">Top Seller</h2>
                <div className="topseller">
                    <div className="top-div">
                        <img className="top_image" src="https://img.shop.com/Image/210000/214100/214196/products/561800349__175x175__.jpg" alt="/" />
                        <p className="nw-over">Isotonix OPC-3®</p>
                        <h2>$31.95-$71.95</h2>
                        <p>+$1.44/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="top-div">
                        <img className="top_image" src="https://img.shop.com/Image/240000/243300/243396/products/603891601__175x175__.jpg" alt="/" />
                        <p className="nw-over">Ultimate Aloe™ </p>
                        <h2>$27.95</h2>
                        <p>+$0.56/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="top-div">
                        <img className="top_image" src="https://img.shop.com/Image/210000/214100/214196/products/935461732__175x175__.jpg" alt="/" />
                        <p className="nw-over">Isotonix® Daily Essentials Packets</p>
                        <h2>$77.00</h2>
                        <p>+$1.54/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="top-div">
                        <img className="top_image" src="https://img.shop.com/Image/210000/214100/214196/products/561800354__175x175__.jpg" alt="/" />
                        <p className="nw-over">Isotonix®Digestive Enzymes with Probiotics(packets)</p>
                        <h2>$24.95</h2>
                        <p>+$1.54/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="top-div">
                        <img className="top_image" src="https://img.shop.com/Image/210000/214100/214196/products/1301699648__175x175__.jpg" alt="/" />
                        <p className="nw-over">Isotonix®Digestive Enzymes with Probiotics</p>
                        <h2>$35.50</h2>
                        <p>+$0.71/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                </div>
            </div>
            <div className="cont16">
                <h1 className="cleaning-h">Cleaning & Health Have Never Been More Important</h1>
                <div className="cleaning-prd">
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?size=300x300" alt="/" />
                        <p className="nw-over">Isotonix® Vitamin D with K2</p>
                        <h2>$33.50-$79.95</h2>
                        <p>+$1.60/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/250000/250100/250199/products/1332818472.jpg?size=300x300" alt="/" />
                        <p className="nw-over">DNA Miracles Isotonix® Immune</p>
                        <h2>$22.50</h2>
                        <p>+$0.45/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/210000/214100/214196/products/561800360.jpg?size=300x300" alt="/" />
                        <p className="nw-over">Isotonix® Vitamin C</p>
                        <h2>$15.95-$34.50</h2>
                        <p>+$0.69/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/210000/214200/214267/products/559010729.jpg?size=300x300" alt="/" />
                        <p className="nw-over">ClearShield® Maximum Protection and Hydration</p>
                        <h2>$13.95-$23.95</h2>
                        <p>+$0.48/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/210000/214100/214196/products/912160941.jpg?size=300x300" alt="/" />
                        <p className="nw-over">Isotonix® Bromelain Plus</p>
                        <h2>$61.50</h2>
                        <p>+$1.23/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/240000/243300/243390/products/559053516.jpg?size=300x300" alt="/" />
                        <p className="nw-over">Snap™ All Purpose Natural Concentrate</p>
                        <h2>$12.95</h2>
                        <p>+$0.26/2.01% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/240000/243300/243390/products/559053525.jpg?size=300x300" alt="/" />
                        <p className="nw-over">Snap™ Heavy Duty Concentrate</p>
                        <h2>$12.50</h2>
                        <p>+$0.25/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/210000/214100/214196/products/893741343.jpg?size=300x300" alt="/" />
                        <p className="nw-over">Isotonix® Immune</p>
                        <h2>$43.50 - $99.95</h2>
                        <p>+$2.00/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/240000/243300/243396/products/603891601.jpg?size=300x300" alt="/" />
                        <p className="k_color nw-over">Ultimate Aloe™</p>
                        <h2>$27.95</h2>
                        <p>+$0.56/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/210000/214100/214196/products/1301699648.jpg?size=300x300" alt="/" />
                        <p className="nw-over">Isotonix®Digestive Enzymes with Probiotics</p>
                        <h2>$35.50</h2>
                        <p>+$0.71/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/240000/243300/243390/products/559053523.jpg?size=300x300" alt="/" />
                        <p className="nw-over">Snap™triple Enzyme 3X Laundry Detergent</p>
                        <h2>$13.95</h2>
                        <p>+$0.28/2.01% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/270000/279400/279479/products/1790609519.jpg?size=300x300" alt="/" />
                        <p className="nw-over">Thymenol™</p>
                        <h2>$69.95</h2>
                        <p>+$1.40/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/240000/243300/243386/products/623809148.jpg?size=300x300" alt="/" />
                        <p className="nw-over">Prime™ Astaxanthin Cardio and Visual Vitality Formula</p>
                        <h2>$43.95</h2>
                        <p>+$0.88/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                    <div className="clean-div">
                        <img src="https://img.shop.com/Image/240000/243300/243382/products/604981555.jpg?size=300x300" alt="/" />
                        <p className="nw-over">NutriClean® HepatoCleanse(Liver Support Formula)</p>
                        <h2>$27.95</h2>
                        <p>+$0.56/2% Cashback</p>
                        <p className="j_color">Free shipping with $99 orders</p>
                    </div>
                </div>

            </div>
            <div className="cont17">
                <h1 className="brd-head">Our Brands</h1>
                <div className="or-brnd">
                    <div>
                        <h3 className="brd-text">HEALTH & NUTRITION</h3>
                        <img className="brd-img" src="https://img.shop.com/Image/homepage/healthnutirtion1572880380738.jpg" alt="/" />
                    </div>
                    <div>
                        <h3 className="brd-text">BEAUTY</h3>
                        <img className="brd-img" src="https://img.shop.com/Image/homepage/lipstick1572880828301.jpg" alt="/" />
                    </div>
                    <div>
                        <h3 className="brd-text">HOME and CLEANING</h3>
                        <img className="brd-img" src="https://img.shop.com/Image/homepage/home_ma1572880950379.jpg" alt="/" />
                    </div>
                    <div>
                        <h3 className="brd-text">BABY and KIDS</h3>
                        <img className="brd-img" src="https://img.shop.com/Image/homepage/baby-kids1572881179463.jpg" alt="/" />
                    </div>
                    <div>
                        <h3 className="brd-text">JEWELRY</h3>
                        <img className="brd-img" src="https://img.shop.com/Image/homepage/1840336563__225x225-img__.jpg" alt="/" />
                    </div>




                </div>
            </div>
             <Footer/>
        </div>



    );




};

// export default Home