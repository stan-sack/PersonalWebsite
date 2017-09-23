import FontAwesome from 'react-fontawesome';
import React from 'react';
import s from './Header.css';


const Header = () => (
    <header className={s.header} >
        <a href="https://au.linkedin.com/in/stantsouvallas">
            <FontAwesome
                name="linkedin-square"
                size="2x"
                inverse
                aria-hidden="true"
                id={s.linkedinIcon}
            />
        </a>
        <a href="mailto:stan.tsouvallas@gmail.com">
            <FontAwesome
                name="envelope-square"
                size="2x"
                inverse
                aria-hidden="true"
                id={s.emailIcon}
            />
        </a>
        <a href="https://www.facebook.com/stan.tsouvallas">
            <FontAwesome
                name="facebook-square"
                size="2x"
                inverse
                aria-hidden="true"
                id={s.facebookIcon}
            />
        </a>
        <a href="https://github.com/stan-sack">
            <FontAwesome
                name="github-square"
                size="2x"
                inverse
                aria-hidden="true"
                id={s.githubIcon}
            />
        </a>
    </header>
);

Header.propTypes = {}

export default Header;
