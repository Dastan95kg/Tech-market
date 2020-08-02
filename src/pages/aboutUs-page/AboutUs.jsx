import React from 'react';
import './AboutUs.scss';

const AboutUs = ({ aboutUs }) => {
    return (
        <section className="about">
            <div className="about__content">
                <div className="about__content-title">О нас</div>
                {aboutUs && aboutUs.map(item => (
                    <div className="about__content-text" key={item._id}>
                        {item.content}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;