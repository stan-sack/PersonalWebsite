import FontAwesome from 'react-fontawesome';
import React from 'react';
import s from './Footer.css';

const Footer = () => (
    <footer className={s.footer}>
        <a href="#top">
            <FontAwesome
                name="home"
                size="2x"
                inverse
                aria-hidden="true"
                id={s.homeIcon}
            />
        </a>
    </footer>
);

Footer.propTypes = {}

export default Footer;
