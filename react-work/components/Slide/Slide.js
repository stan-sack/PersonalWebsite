import React from 'react';
import s from './Slide.css';

function Slide() {
    return (
        <div style="text-align: center">
            <ul className="menubar">
                <li><a href="#slide2">About</a></li>
                <li><a href="#slide4">Skill Set</a></li>
                <li><a href="#slide6">Portfolio</a></li>
                <li><a href="#slide8">Resume</a></li>
            </ul>
        </div>
    );
}

export default Slide;
