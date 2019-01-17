import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserProducts } from '../../actions/productActions';
import ProductCard from '../product/ProductCard';

class ProfileProducts extends Component{

    constructor(props){
        super(props);

        this.state = {
            products: []
        };
    }
    
    componentDidMount() {
        if(this.props.products.length > 0){
            this.setState({products: this.props.products});
        }
    }
    
    componentWillReceiveProps(newProps){
        if( newProps.products ){
            this.setState({products: newProps.products});
        }

        if( newProps.user && newProps.products.length === 0 ){
            this.props.getUserProducts( newProps.user._id );
        }
    }

    render(){
        return(
            <div className="col-md-8 py-3 d-flex flex-wrap justify-content-between" >
                { this.state.products.map(el => <ProductCard key={el._id} product={el} />) }
            </div>
        );
    }

}

const mapStateToProps = state => ({
    products: state.products.userProducts,
    user: state.user.user
});

export default connect(mapStateToProps, {getUserProducts})( ProfileProducts );