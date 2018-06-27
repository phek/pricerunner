import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadCategory} from '../../actions/categoryActions';
import {getProductImageLink} from '../../utils/product';
import './root.scss';

import ProductField from '../product-field/product-field';

class Root extends Component {
    componentDidMount() {
        this.props.dispatch(loadCategory());
    }

    renderProducts() {
        const {category} = this.props;
        const products = category.get('products');
        let elements = [];
        if (products) {
            elements = products.map((product, index) =>
                <ProductField key={index}
                              label={product.get('name')}
                              rating={Number(product.get('avgRating'))}
                              stores={Number(product.get('retailerCount'))}
                              specs={product.get('shortDescription')}
                              img={getProductImageLink(product)}
                              price={product.get('localMinPrice')}
                              link={product.get('comparePricesLink')} />
            );
        }
        return elements;
    }

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {categoryReducers} = state;

    return {
        category: categoryReducers.get('category')
    };
}

export default connect(mapStateToProps)(Root);
