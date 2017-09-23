import React from 'react';
import PropTypes from 'prop-types'
import s from './ImageSlide.css';

const ImageSlide = ({ backgroundImage, children }) => (
    <div
        className={s.backgroundSlide}
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        {children}
    </div>
)

ImageSlide.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.oneOfType(
        [PropTypes.object, PropTypes.arrayOf(PropTypes.element)]
    )
}

export default ImageSlide;
