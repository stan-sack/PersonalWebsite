/**
* React Static Boilerplate
* https://github.com/kriasoft/react-static-boilerplate
*
* Copyright © 2015-present Kriasoft, LLC. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from '../Header';
import Footer from '../Footer';
import ImageSlide from '../ImageSlide';
import s from './Layout.css';

class Layout extends React.Component {

    static propTypes = {
        className: PropTypes.string,
    };

    componentDidMount() {
        // window.componentHandler.upgradeElement(this.root);
    }

    componentWillUnmount() {
        // window.componentHandler.downgradeElements(this.root);
    }

    render() {
        return (
            <div ref={node => (this.root = node)}>
                <Header />
                <div id="top" />
                <ImageSlide backgroundImage="/img/slide1.jpg">
                    <h1>STAN TSOUVALLAS</h1>
                    <h2>SOFTWARE ENGINEER</h2>
                </ImageSlide>
                <Footer />
            </div>
        );
    }
}

export default Layout;

// <MenuBar
//     items={[
//         { link: '#slide1', text: 'Points to slide1' },
//         { link: '#slide2', text: 'Points to slide2' },
//     ]}
// />
