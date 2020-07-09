import React from 'react';
import './Contacts.scss';

const Contacts = ({ contacts }) => {
    return (
        <section className="contacts">
            <div className="contacts__content">
                <div className="contacts__content-title">Контакты</div>
                {contacts && contacts.map(obj => (
                    <div className="contacts__content-text" key={obj.id}>
                        <div className="contacts__content-text-label">{obj.name}</div>
                        <div className="contacts__content-text-content">{obj.content}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Contacts;