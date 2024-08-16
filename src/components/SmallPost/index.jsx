import * as React from "react";
import "./style.css";

const SmallPost = ({ imageName, date, title, description, link }) => {
    return (
        <div className="small-post-container">
            <div className="small-post-image-container">{imageName}</div>
            <div className="small-post-info">
                <div className="subtitle small-post-date-container">{date}</div>
                <div className="title small-post-title-container">{title}</div>
                <div className="text small-post-description-container">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default SmallPost;
