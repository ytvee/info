import * as React from "react";
import GalleryItem from "../GalleryItem";
import "./style.css";

const Gallery = ({ title, posts }) => {
    return (
        <div className="gallery-container">
            <div className="gallery-title">{title}</div>
            <div className="gallery-content">
                {posts.map((post) => (
                    <GalleryItem
                        title={post.title}
                        description={post.description}
                        link={post.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
