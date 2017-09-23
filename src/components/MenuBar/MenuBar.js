import React, { PropTypes } from 'react';
import s from './MenuBar.css';

const MenuBar = () => (
    <div className={s.menuBarContainer}>
        <ul className={s.menuBar}>
            <li><a href={'#about'}>{'About'}</a></li>
            <li><a href={'#portfolio'}>{'Portfolio'}</a></li>
            <li><a href={'#skillset'}>{'Skill Set'}</a></li>
            <li><a href={'#resume'}>{'Resume'}</a></li>
        </ul>
    </div>
);

MenuBar.propTypes = {};

export default MenuBar;
