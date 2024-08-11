import * as React from "react";
import spriteList from "../../assets/Sprites";
import "./style.css";

const GalleryItem = ({ postTitle, description, link, children }) => {
    return (
        <div className="gallery-item-container">
            <a href={link} target="_blank">
                <div className="item-image-container">{children}</div>
                <div className="item-title-container">
                    {postTitle}
                    <div className="svg-container">{spriteList.arrowLink}</div>
                </div>
            </a>
            <div className="item-description-container">{description}</div>
        </div>
    );
};

export default GalleryItem;
