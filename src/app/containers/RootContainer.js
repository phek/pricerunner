import React from 'react';
import Root from '../components/root/Root';

export default function RootContainer() {
    return (
        <div>
            <header className="header">
                <strong className="header__pricerunner">
                    PriceRunner
                </strong>
            </header>
            <div className="container">
                <div className="content">
                    <Root />
                </div>
            </div>
        </div>
    );
}
