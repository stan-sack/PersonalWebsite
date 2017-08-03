import React, { PropTypes } from 'react';
import { Button, Card, CardTitle, Col } from 'react-materialize';
import s from './CardSlide.css';



const CardSlide = () => (

    <div className={s.cardSlide}>
        <Card className={s.cardStyle} header={<CardTitle reveal image={"img/itutorparents.png"} waves='light'/>}
            title="iTutor Parents"
            reveal={<p>Contributed to API and built front end components using React. Engineered and implemented automatic reporting system for parents.</p>}>
            <p><a href="parents.itutorworld.com.au">parents.itutorworld.com.au</a></p>
            <p><a href="https://play.google.com/store/apps/details?id=io.cordova.itutorparentapp&hl=en">Play Store</a></p>
        </Card>
        <Card className={s.cardStyle} header={<CardTitle reveal image={"img/blobgame.png"} waves='light'/>}
            title="BlobGame"
            reveal={<p>Collaboration with Adelaide artist <a href="nicholashanisch.com">Nicholas Hanisch</a> to attempt a small game in Java. More a proof of concept than anything else. Ported to Android using libGDX framework. Currently available on Google Play.</p>}>
            <p><a href="https://github.com/stan-sack/BlobGameGdx">GitHub</a></p>
            <p><a href="https://play.google.com/store/apps/details?id=com.stan.game">Play Store</a></p>
        </Card>
        <Card className={s.cardStyle} header={<CardTitle reveal image={"img/pulaapply.png"} waves='light'/>}
            title="Pula Apply"
            reveal={<p>Built major components of API including integration with PostgreSQL, AWS SES and Latex. Made alterations to Gravity Forms integration.</p>}>
            <p><a href="http://apply.pulacapital.com.au/">apply.pulacapital.com.au</a></p>
        </Card>
        <Card className={s.cardStyle} header={<CardTitle reveal image={"img/itutorapply.png"} waves='light'/>}
            title="iTutor Apply"
            reveal={<p>Built major components of API including integration with PostgreSQL, AWS SES and Latex. Made minor contributions to front end.</p>}>
            <p><a href="http://apply.itutorworld.com.au/">apply.itutorworld.com.au</a></p>
        </Card>
        <Card className={s.cardStyle} header={<CardTitle reveal image={"img/ausrt.png"} waves='light'/>}
            title="AUSRT"
            reveal={<p>Worked on the site as part of honours thesis. Mostly involved front end HTML and WordPress.</p>}>
            <p><a href="http://www.ausrt.com/">ausrt.com</a></p>
        </Card>
        <Card className={s.cardStyle} header={<CardTitle reveal image={"img/itutorsuite.png"} waves='light'/>}
            title="iTutor Suite"
            reveal={<p>Contributed to maintance of Delphi software.</p>}>
            <p><a href="http://itutorworld.com.au/">itutorworld.com.au</a></p>
        </Card>
    </div>
);

CardSlide.propTypes = {}

export default CardSlide
// <Card className={s.cardStyle}>
