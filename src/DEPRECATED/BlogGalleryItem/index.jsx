import * as React from "react";
import spriteList from "../../assets/Sprites";
import "./style.css";

// TODO: добавить условие отрисовки <a> или <Link>
// TODO: rename PostTitle to postTitle

const BlogGalleryItem = ({
    PostTitle,
    description,
    link = null,
    date = null,
    orientation = "vertical",
}) => {
    console.log("date", date);
    return (
        <div
            className={`blog-gallery-item-container ${orientation}`}
        >
            <div className="blog-item-image-container">
                <img
                    className="blog-post-image post-img"
                    src={`https://res.cloudinary.com/duyqvi0ig/image/upload/v1723146146/2_q0bfle.png`}
                    alt={`post.PostTitle`}
                />
            </div>
            <div className={`${orientation}-text-container`}>
                <div className="text blog-item-title-container">
                    {PostTitle}
                    <div className="blog-svg-container">
                        {spriteList.arrowLink}
                    </div>
                </div>
                <div className="text blog-item-description-container">
                    {description}
                </div>
                <div className="text blog-item-date-container">{date}</div>
            </div>
        </div>
    );
};

export default BlogGalleryItem;
