import * as React from "react";
import GalleryItem from "../GalleryItem";
import "./style.css";

const Gallery = ({ GalleryTitle, posts }) => {
    return (
        <div className="gallery-container">
            <div className="gallery-title">{GalleryTitle}</div>
            <div className="gallery-content">
                {posts.map((post) => (
                    <GalleryItem
                        key={post.id}
                        PostTitle={post.title}
                        description={post.description}
                        link={post.link}
                        imagePath={post.id}
                    >
                        <div className="media-image-container">
                            <img
                                className="media-image"
                                src={post.imagePath}
                                alt={post.PostTitle}
                            />
                        </div>
                    </GalleryItem>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
