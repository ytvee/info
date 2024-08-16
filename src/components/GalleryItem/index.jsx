import * as React from "react";
import spriteList from "../../assets/Sprites";
import { cutText, getDateName } from "./meta";
import "./style.css";

const GalleryItem = ({ postTitle, description, link, date = null, children = null, target = "_blank" }) => {
    return (
        <div className="gallery-item-container">
            <a href={link} target={target}>
                <div className="item-image-container">
                    {children && children}
                </div>
                <div className="title item-title-container">
                    {postTitle}
                    <div className="svg-container">{spriteList.arrowLink}</div>
                </div>
            </a>
            <div className="text item-description-container">{cutText(description)}</div>
            <div className="subtitle item-date-container">{date && ("Дата: " + getDateName(date))}</div>
        </div>
    );
};

export default GalleryItem;
