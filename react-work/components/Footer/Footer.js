import FontAwesome from 'react-fontawesome';
import React from 'react';
import s from './Footer.css';

function Footer() {
    return (
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
}

export default Footer;
