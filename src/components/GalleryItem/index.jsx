import * as React from "react";
import "./style.css";

// TODO: добавить условие отрисовки <a> или <Link>

const ArrowIcon = () => {
    return (
        <div className="svg-container">
            <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 21L17 11M17 11H7M17 11V21"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    );
};

const GalleryItem = ({ title, description, link }) => {
    return (
        <div className="gallery-item-container">
            <div className="item-image-container"></div>
            <a href={link} target="_blank">
                <div className="item-title-container">
                    {title}
                    <ArrowIcon />
                </div>
            </a>
            <div className="item-description-container">{description}</div>
            {/* <div className="item-tags-container"></div> */}
        </div>
    );
};

export default GalleryItem;
