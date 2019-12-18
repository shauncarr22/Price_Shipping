import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            query: "17264ec6"
        }
    }
    componentDidMount() {
        window.addEventListener('query',(e) => {
            this.setState({query: e.detail})
            this.getSingleProduct(this.state.query)
            console.log(e)
        })
        this.getSingleProduct(this.state.query)
        console.log(this.state.query)
    }
   
    getSingleProduct(query) {
      axios.get(`http://localhost:3007/products/${query}`)
          .then(({ data }) => {
              console.log(data)
            //   console.log(this.state.query)
          this.setState({ products: data})
        })
    }
    
    render() {
        return (
            <div className="Cart">
                <div >
                    <span className="Price" ></span>
                    <span className="Short Desc 1"></span>
                    <span className="Short Desc 2"></span>
                    <span className="Short Desc 3"></span>
                </div>
                {this.state.products.map((product =>
                    <div key={product.price}>
                        <div className="Price">
                            <span className="Price"> {product.price}</span>
                            <img className="GCS" src="https://pm1.narvii.com/6308/1337f87092b2e83e03903cb41789d04011c8e203_hq.jpg"></img>
                        </div>
                        <ul className="Desc">
                            <li className="Desc_1">{product.line_1}</li>
                            <li className="Desc_2">{product.line_2} </li>
                            <li className="Desc_3">{product.line_3}</li>
                        </ul>
                        <img className= "ServiceBanner" src= "https://lda.lowes.com/is/image/Lowes/PDP_Services_Banner?scl=1"></img>
                            <hr className="vSpacing Large"></hr>
                        <div>
                        <a aria-label="Decrease Quantity by 1" tabIndex="0">
                            <i className= 'fas- fa-minus' className="iconMinus">{'-'} </i></a>
                        <input aria-describedby="product-qty-stepper-aria-describedby"name="quantity"
                            aria-label="quantity" data-toggle="stepper" data-round="up" id="quantity"
                            className="quantity" pattern="[0-9]*" type="tel" data-min="1"
                            data-max="9999" data-step="1" defaultValue="1" maxLength="4"></input>
                        <a aria-label="Increase Quantity by 1" tabIndex="0">
                            <i className="iconPlus">{'+'}</i></a>
                            <button type="submit" className="addButton ">Add To Cart</button>
                            <span id="product-qty-stepper-aria-describedby" className="ada screen-reader-only">
                                </span>
                            <a href="#save" className="Save"
                                data-product-id="" data-product-name="X-Wing"
                                data-gaugepath="saveToList"><i aria-hidden="true" className="icon-heart-outline"></i>
                                <span>Save</span></a>
                            <a href="#share" type="button" className="Share"
                                data-toggle="modal" data-target= ""src="https://www.iconsdb.com/icons/preview/royal-blue/heart-xxl.png"><i aria-hidden="true"
                                    className="icon-link"></i> <span>Share</span></a>
                            <hr className="vSpacing"></hr>
                        </div>
                        <hr className="pd-fulfillment grid-100 grid-parentv-spacing-large"></hr>
                        <div  className="pd-pickup-fulfillment">
                            <div  className="pickup">
                                <link itemProp="potentialAction" itemScope="" itemType="http://schema.org/BuyAction"></link>
                                <meta itemProp="availability" content="http://schema.org/InStock"></meta>
                                <div itemProp="deliveryLeadTime" itemScope="" itemType="http://schema.org/QuantitativeValue">
                                    <span itemProp="value" content="0">
                                    </span></div>
                                <div className="fulfillment-method grid-50 tablet-grid-50">
                                    <div className= "fulfillment-method-head align-left">
                                    <img className="box" src="https://www.pngfind.com/pngs/m/140-1402989_png-file-svg-cardboard-box-icon-transparent-png.png"></img> 
                                        <h4 className="box-text">FREE Store Pickup</h4>
                                        <p className="gauge-pickup">10 Available today<br /> at Central Austin <br />MandaLowe's!</p>
                                        <img className="checkbox-1" src= "https://retohercules.com/images250_/green-checkmark-transparent-6.png"></img>
                                    </div>
                                </div>
                                <div className="pd-shipping-delivery-fulfillment grid-50 tablet-grid-50">
                                    <div className="Delivery">
                                        <img className="falcon" src="https://www.pngfind.com/pngs/m/6-60968_download-svg-download-png-star-wars-icon-transparent.png"></img>
                                        <h4 className="delivery-text">Delivery</h4>
                                        <p className="gauge-delivery">Delivery Available!</p>
                                        <img className="checkbox-2" src="https://retohercules.com/images250_/green-checkmark-transparent-6.png"></img>
                                    </div>
                                        <div className="aisle">
                                            <p><strong>Aisle</strong> 900, <strong>Bay</strong> 3 </p>
                                            <div className="otherStores">
                                                <button type="button" className="otherStores">Check Other Stores</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        );
    }
}

export default App;
