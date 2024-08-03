import * as React from "react";
import { description, cta, links } from "./meta";
import "./style.css";

const ContactsForm = () => {
    return (
        <div class="contacts-container">
            <div className="contacts-label">{description.LABEL}</div>
            <div className="contacts-title">{description.TITLE}</div>
            <div className="contacts-description">{description.TEXT}</div>
            <div className="contacts-clickable-block">
                <div className="contacts-clickable-text">
                    {cta.START_DESCRIPTION}
                    <span className="link">{cta.CONTACT_LINK}</span>
                    {cta.END_DESCRIPTION}
                </div>
                <a href={links.telegram} target="_blank">
                <button className="standard-button">
                    {cta.BUTTON_TEXT}
                </button>
                </a>
            </div>
        </div>
    );
};

export default ContactsForm;
