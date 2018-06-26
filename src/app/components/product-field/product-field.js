import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './product-field.scss';

export default class ProductField extends Component {
    renderRating() {
        let rating = Math.round(this.props.rating);
        let elements = [];
        let i = 0;
        while (i < rating && i < 5) {
            elements.push(<span className='star-filled' key={i}>☆</span>);
            i++;
        }
        while (i < 5) {
            elements.push(<span key={i}>☆</span>);
            i++;
        }
        return elements;
    }

    render() {
        const {label, specs, img, link, price, stores} = this.props;
        return (
            <div className='product-container'>
                <div className='product-inner-left-container'>
                    <img src={img} />
                    <div className='product-stars'>
                        {this.renderRating()}
                    </div>
                </div>
                <div className='product-inner-mid-container'>
                    <div className='product-upper-desc'>
                        <h1>{label}</h1>
                        <p>{specs}</p>
                    </div>
                    <div className='product-lower-desc'>
                        <p>{stores} butiker</p>
                        <p>fr. <span>{Math.round(price.get('value'))} {price.get('currency')}</span></p>
                    </div>
                </div>
                <div className='product-inner-right-container'>
                    <a className='product-button' href={link}>Jämför pris</a>
                </div>
            </div>
        );
    }
}

ProductField.propTypes = {
    label: PropTypes.string,
    specs: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.func,
    rating: PropTypes.string,
    price: PropTypes.object,
    stores: PropTypes.string
};
