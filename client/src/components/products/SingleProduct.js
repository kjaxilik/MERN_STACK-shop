import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleProduct extends Component {
  render() {
    return (
      <React.Fragment>
        {/*<!-- Single Product -->*/}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="single-product-wrapper">
            {/*<!-- Product Image -->*/}
            <Link to="/products/single">
              <div className="product-img">
                <img src="../images/product-img/product-3.jpg" alt="" />
                {/*<!-- Hover Thumb -->*/}
                <img className="hover-img" src="../images/product-img/product-4.jpg" alt="" />

                {/*<!-- Product Badge -->*/}
                <div className="product-badge new-badge">
                  <span>New</span>
                </div>

                {/*<!-- Favourite -->
              <div className="product-favourite">
                <Link to="#" className="favme fa fa-heart" />
              </div>*/}
              </div>
            </Link>

            {/*<!-- Product Description -->*/}
            <div className="product-description">
              <span>topshop</span>
              <Link to="products/single">
                <h6>Knot Front Mini Dress</h6>
              </Link>
              <p className="product-price">$80.00</p>

              {/*<!-- Hover Content -->*/}
              <div className="hover-content">
                {/*<!-- Add to Cart -->*/}
                <div className="add-to-cart-btn">
                  <Link to="#" className="btn essence-btn">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleProduct;
