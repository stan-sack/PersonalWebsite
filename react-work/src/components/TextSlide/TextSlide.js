import React, { PropTypes } from 'react';
import s from './TextSlide.css';

const TextSlide = ({ children }) => (
    <div className={s.textSlide}>
        <h3 className={s.quote}>
            {children}
        </h3>
    </div>
);

TextSlide.propTypes = {
    children: PropTypes.string
};

export default TextSlide;
