import React, { PropTypes } from 'react';
import s from './ImageSlide.css';

class ImageSlide extends React.Component {

    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.element),
        backgroundImage: PropTypes.string
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div
                className={s.backgroundSlide}
                style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
            >
                {this.props.children}
            </div>
        );
    }

}

export default ImageSlide;
