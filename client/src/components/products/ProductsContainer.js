import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

import { getProducts } from '../../actions/productActions';

import SingleProduct from './SingleProduct';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
// rc slider for cost ranging: https://react-component.github.io/slider/
const Style = {
  height: `200px`,
  backgroundImage: 'url(/images/bg-img/breadcumb.jpg)'
};

class ProductContainer extends Component {
  /****** вызов функции getProducts и добавление в props */
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <React.Fragment>
        {/*<!-- ##### Breadcumb Area Start ##### --> */}
        <div className="breadcumb_area bg-img" style={Style}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="page-title text-center">
                  <h2>dresses</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- ##### Breadcumb Area End ##### --> */}
        {/*<!-- ##### Shop Grid Area Start ##### --> */}
        <section className="shop_grid_area section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <div className="shop_sidebar_area">
                  {/* <!-- ##### Single Widget ##### -->*/}
                  <div className="widget catagory mb-50">
                    {/*<!-- Widget Title -->*/}
                    <h6 className="widget-title mb-30">Catagories</h6>

                    {/*<!--  Catagories  -->*/}
                    <div className="catagories-menu">
                      <ul id="menu-content2" className="menu-content collapse show">
                        {/*<!-- Single Item -->*/}
                        <li data-toggle="collapse" data-target="#clothing">
                          <Link to="#">clothing</Link>
                          <ul className="sub-menu collapse show" id="clothing">
                            <li>
                              <Link to="#">All</Link>
                            </li>
                            <li>
                              <Link to="#">Bodysuits</Link>
                            </li>
                            <li>
                              <Link to="#">Dresses</Link>
                            </li>
                            <li>
                              <Link to="#">Hoodies &amp; Sweats</Link>
                            </li>
                            <li>
                              <Link to="#">Jackets &amp; Coats</Link>
                            </li>
                            <li>
                              <Link to="#">Jeans</Link>
                            </li>
                            <li>
                              <Link to="#">Pants &amp; Leggings</Link>
                            </li>
                            <li>
                              <Link to="#">Rompers &amp; Jumpsuits</Link>
                            </li>
                            <li>
                              <Link to="#">Shirts &amp; Blouses</Link>
                            </li>
                            <li>
                              <Link to="#">Shirts</Link>
                            </li>
                            <li>
                              <Link to="#">Sweaters &amp; Knits</Link>
                            </li>
                          </ul>
                        </li>
                        {/*<!-- Single Item -->*/}
                        <li data-toggle="collapse" data-target="#shoes" className="collapsed">
                          <Link to="#">shoes</Link>
                          <ul className="sub-menu collapse" id="shoes">
                            <li>
                              <Link to="#">All</Link>
                            </li>
                            <li>
                              <Link to="#">Bodysuits</Link>
                            </li>
                            <li>
                              <Link to="#">Dresses</Link>
                            </li>
                            <li>
                              <Link to="#">Hoodies &amp; Sweats</Link>
                            </li>
                            <li>
                              <Link to="#">Jackets &amp; Coats</Link>
                            </li>
                            <li>
                              <Link to="#">Jeans</Link>
                            </li>
                            <li>
                              <Link to="#">Pants &amp; Leggings</Link>
                            </li>
                            <li>
                              <Link to="#">Rompers &amp; Jumpsuits</Link>
                            </li>
                            <li>
                              <Link to="#">Shirts &amp; Blouses</Link>
                            </li>
                            <li>
                              <Link to="#">Shirts</Link>
                            </li>
                            <li>
                              <Link to="#">Sweaters &amp; Knits</Link>
                            </li>
                          </ul>
                        </li>
                        {/*<!-- Single Item -->*/}
                        <li data-toggle="collapse" data-target="#accessories" className="collapsed">
                          <Link to="#">accessories</Link>
                          <ul className="sub-menu collapse" id="accessories">
                            <li>
                              <Link to="#">All</Link>
                            </li>
                            <li>
                              <Link to="#">Bodysuits</Link>
                            </li>
                            <li>
                              <Link to="#">Dresses</Link>
                            </li>
                            <li>
                              <Link to="#">Hoodies &amp; Sweats</Link>
                            </li>
                            <li>
                              <Link to="#">Jackets &amp; Coats</Link>
                            </li>
                            <li>
                              <Link to="#">Jeans</Link>
                            </li>
                            <li>
                              <Link to="#">Pants &amp; Leggings</Link>
                            </li>
                            <li>
                              <Link to="#">Rompers &amp; Jumpsuits</Link>
                            </li>
                            <li>
                              <Link to="#">Shirts &amp; Blouses</Link>
                            </li>
                            <li>
                              <Link to="#">Shirts</Link>
                            </li>
                            <li>
                              <Link to="#">Sweaters &amp; Knits</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/*<!-- ##### Single Widget ##### -->*/}
                  <div className="widget price mb-50">
                    {/*<!-- Widget Title -->*/}
                    <h6 className="widget-title mb-30">Filter by</h6>
                    {/*<!-- Widget Title 2 -->*/}
                    <p className="widget-title2 mb-30">Price</p>

                    <div className="widget-desc">
                      <div className="slider-range">
                        <div
                          data-min="49"
                          data-max="360"
                          data-unit="$"
                          className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                          data-value-min="49"
                          data-value-max="360"
                          data-label-result="Range:"
                        >
                          <div className="ui-slider-range ui-widget-header ui-corner-all" />
                          <span
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            /* tabindex="0"*/
                          />
                          <span
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            /* tabindex="0"*/
                          />
                        </div>
                        <div className="range-price">Range: $49.00 - $360.00</div>
                      </div>
                    </div>
                  </div>

                  {/*<!-- ##### Single Widget ##### -->*/}
                  <div className="widget color mb-50">
                    {/*<!-- Widget Title 2 -->*/}
                    <p className="widget-title2 mb-30">Color</p>
                    <div className="widget-desc">
                      <ul className="d-flex">
                        <li>
                          <Link to="#" className="color1" />
                        </li>
                        <li>
                          <Link to="#" className="color2" />
                        </li>
                        <li>
                          <Link to="#" className="color3" />
                        </li>
                        <li>
                          <Link to="#" className="color4" />
                        </li>
                        <li>
                          <Link to="#" className="color5" />
                        </li>
                        <li>
                          <Link to="#" className="color6" />
                        </li>
                        <li>
                          <Link to="#" className="color7" />
                        </li>
                        <li>
                          <Link to="#" className="color8" />
                        </li>
                        <li>
                          <Link to="#" className="color9" />
                        </li>
                        <li>
                          <Link to="#" className="color10" />
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/*<!-- ##### Single Widget ##### -->*/}
                  <div className="widget brands mb-50">
                    {/*<!-- Widget Title 2 -->*/}
                    <p className="widget-title2 mb-30">Brands</p>
                    <div className="widget-desc">
                      <ul>
                        <li>
                          <Link to="#">Asos</Link>
                        </li>
                        <li>
                          <Link to="#">Mango</Link>
                        </li>
                        <li>
                          <Link to="#">River Island</Link>
                        </li>
                        <li>
                          <Link to="#">Topshop</Link>
                        </li>
                        <li>
                          <Link to="#">Zara</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-8 col-lg-9">
                <div className="shop_grid_product_area">
                  <div className="row">
                    <div className="col-12">
                      <div className="product-topbar d-flex align-items-center justify-content-between">
                        {/*<!-- Total Products -->*/}
                        <div className="total-products">
                          <p>
                            <span>186</span> products found
                          </p>
                        </div>
                        {/*<!-- Sorting -->*/}
                        <div className="product-sorting d-flex">
                          <p>Sort by:</p>
                          <form action="#" method="get">
                            <select name="select" id="sortByselect">
                              <option value="value">Highest Rated</option>
                              <option value="value">Newest</option>
                              <option value="value">Price: $$ - $</option>
                              <option value="value">Price: $ - $$</option>
                            </select>
                            <input type="submit" className="d-none" value="" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*****************
                  Single Products 
                **********************/}

                  <div className="row">
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                  </div>
                </div>
                {/* <!-- Pagination -->*/}
                <nav aria-label="navigation">
                  <ul className="pagination mt-50 mb-70">
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        <i className="fa fa-angle-left" />
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        ...
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        21
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        <i className="fa fa-angle-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

// ProductContainer.propTypes = {
//   products: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductContainer);
