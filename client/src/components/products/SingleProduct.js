import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = data => {
  const product = data.prod;

  return (
    <React.Fragment>
      {/*<!-- Single Product -->*/}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-product-wrapper">
          {/*<!-- Product Image -->*/}
          <Link to={'/products/' + product._id}>
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
            <Link to={'/products/' + product._id}>
              <h6>{product.name}</h6>
            </Link>
            <p className="product-price">${product.price}</p>

            {/*<!-- Hover Content -->*/}
            <div className="hover-content">
              {/*<!-- Add to Cart -->*/}
              <div className="add-to-cart-btn">
                <Link to={'/products/' + product._id} className="btn essence-btn">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
