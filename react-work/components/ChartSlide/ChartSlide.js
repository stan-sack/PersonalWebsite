import React, { PropTypes } from 'react';
import s from './ChartSlide.css';

const ChartSlide = ({ children }) => (
    <div className={s.textSlide}>
        <h3 className={s.quote}>
            {children}
        </h3>
    </div>
);

ChartSlide.propTypes = {
    children: PropTypes.string
};

export default ChartSlide;
