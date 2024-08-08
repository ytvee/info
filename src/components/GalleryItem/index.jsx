import * as React from "react";
import spriteList from "../../assets/Sprites";
import { StaticImage } from "gatsby-plugin-image";
import "./style.css";

// TODO: добавить условие отрисовки <a> или <Link>

const GalleryItem = ({ title, description, link }) => {
    return (
        <div className="gallery-item-container">
            <div className="item-image-container"></div>
            <a href={link} target="_blank">
                <StaticImage
                    alt={title}
                    src="./assets/images/jasakidscase.png"
                />
                {/* <img src="../../assets/images/jasakids.svg" /> */}
                <div className="item-title-container">
                    {title}
                    <div className="svg-container">
                        {spriteList.arrowLink}
                    </div>
                </div>
            </a>
            <div className="item-description-container">{description}</div>
            {/* <div className="item-tags-container"></div> */}
        </div>
    );
};

export default GalleryItem;
