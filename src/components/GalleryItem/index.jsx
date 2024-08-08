import * as React from "react";
import spriteList from "../../assets/Sprites";
import "./style.css";

// TODO: добавить условие отрисовки <a> или <Link>
// TODO: add key to all map-functions

const GalleryItem = ({ title, description, link, children }) => {
    console.log("rendered");
    return (
        <div className="gallery-item-container">
            <a href={link} target="_blank">
                <div className="item-image-container">{children}</div>
                <div className="item-title-container">
                    {title}
                    <div className="svg-container">{spriteList.arrowLink}</div>
                </div>
            </a>
            <div className="item-description-container">{description}</div>
            {/* <div className="item-tags-container"></div> */}
        </div>
    );
};

export default GalleryItem;
