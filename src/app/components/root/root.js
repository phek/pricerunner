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
        let view = '';
        if (products) {
            console.log(products);
            view = products.map((product, index) =>
                <ProductField key={index}
                              label={product.get('name')}
                              rating={product.get('avgRating')}
                              stores={product.get('retailerCount')}
                              specs={product.get('shortDescription')}
                              img={getProductImageLink(product)}
                              price={product.get('localMinPrice')}
                              link={product.get('comparePricesLink')} />
            );
        }
        return view;
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
