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
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        link={post.link}
                        imagePath={post.id}
                    >
                        <div className="media-image-container">
                            <img
                                className="media-image"
                                src={post.imagePath}
                                alt={post.title}
                            />
                        </div>
                    </GalleryItem>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
