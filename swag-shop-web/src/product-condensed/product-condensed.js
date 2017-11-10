import React, {Component} from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
    render() {
        return (
            <li className="list-group-item">
                <a className="btn btn-outline-danger btn-sm">x</a>&nbsp;
                {this.props.product.title} | <b>${this.props.product.price}</b>
            </li>
        );
    }
}

export default ProductCondensed;