import * as React from "react";
import "./style.css";

const BigPost = ({ imageName, date, title, description, link }) => {
    return (
        <div className="big-post-container">
            <div className="big-post-image-container">{imageName}</div>
            <div className="big-post-date-container">{date}</div>
            <div className="big-post-title-container">{title}</div>
            <div className="big-post-description-container">{description}</div>
        </div>
    );
};

export default BigPost;
